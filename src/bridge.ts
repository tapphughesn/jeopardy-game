import CDP from "chrome-remote-interface";

export type JeopardyBridgeEvent =
  | { type: "heartbeat"; armed: boolean }
  | { type: "buzz" }
  | { type: "clear" }
  | { type: "disconnected"; reason: string };

export interface BridgePage {
  url(): string;
  evaluate<T>(expression: string): Promise<T>;
}

export interface BridgeBrowser {
  pages(): Promise<BridgePage[]>;
  close?(): Promise<void>;
}

export class BuzzTransitionDetector {
  private initialized = false;
  private armed = false;

  update(hasBuzz: boolean): JeopardyBridgeEvent[] {
    if (!this.initialized) {
      this.initialized = true;
      this.armed = !hasBuzz;
      return [];
    }
    if (this.armed && hasBuzz) {
      this.armed = false;
      return [{ type: "buzz" }];
    }
    if (!this.armed && !hasBuzz) {
      this.armed = true;
      return [{ type: "clear" }];
    }
    return [];
  }

  isArmed(): boolean {
    return this.armed;
  }
}

export interface BridgeOptions {
  endpoint?: string;
  pollMs?: number;
  buzzinUrlPrefix?: string;
  log?: (message: string) => void;
  signal?: AbortSignal;
}

export async function isJeopardyHost(page: BridgePage): Promise<boolean> {
  if (page.url().includes("#audience")) return false;
  try {
    return await page.evaluate<boolean>("window.__JEOPARDY_BUZZ_BRIDGE_TARGET__ === true");
  } catch {
    return false;
  }
}

export async function readBuzzState(page: BridgePage): Promise<boolean> {
  return page.evaluate<boolean>(`(() => {
    const list = document.querySelector("#playersList");
    if (!list) return false;
    return Boolean(
      list.querySelector(".rankBadge--first") ||
      list.querySelector("[class~='rankBadge'][data-rank='1']")
    );
  })()`);
}

export async function sendToJeopardy(page: BridgePage, event: JeopardyBridgeEvent): Promise<void> {
  await page.evaluate(`window.dispatchEvent(new CustomEvent("jeopardy-buzz-bridge", { detail: ${JSON.stringify(event)} })); true`);
}

export class BuzzInBridge {
  private readonly detector = new BuzzTransitionDetector();
  private buzzPage: BridgePage | undefined;
  private hostPage: BridgePage | undefined;
  private lastProblem = "";

  constructor(
    private readonly browser: BridgeBrowser,
    private readonly options: Required<Pick<BridgeOptions, "buzzinUrlPrefix" | "log">>
  ) {}

  async tick(): Promise<void> {
    const pages = await this.browser.pages();
    const nextBuzzPage = pages.find(page => page.url().startsWith(this.options.buzzinUrlPrefix));
    const nextHostPage = await this.findHostPage(pages);

    if (nextBuzzPage !== this.buzzPage) {
      this.buzzPage = nextBuzzPage;
      this.lastProblem = "";
    }
    this.hostPage = nextHostPage;

    if (!this.hostPage) {
      this.reportProblem("Waiting for the Jeopardy host tab");
      return;
    }
    if (!this.buzzPage) {
      await sendToJeopardy(this.hostPage, { type: "disconnected", reason: "BuzzIn host tab not found" });
      this.reportProblem("Waiting for the BuzzIn host tab");
      return;
    }

    try {
      const hasBuzz = await readBuzzState(this.buzzPage);
      for (const event of this.detector.update(hasBuzz)) {
        await sendToJeopardy(this.hostPage, event);
        this.options.log(event.type === "buzz" ? "Buzz detected; audience clue hidden." : "Buzzers cleared; audience clue restored.");
      }
      await sendToJeopardy(this.hostPage, { type: "heartbeat", armed: this.detector.isArmed() });
      if (this.lastProblem) this.options.log("BuzzIn monitoring connected.");
      this.lastProblem = "";
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      await sendToJeopardy(this.hostPage, { type: "disconnected", reason });
      this.reportProblem(reason);
    }
  }

  private async findHostPage(pages: BridgePage[]): Promise<BridgePage | undefined> {
    for (const page of pages) {
      if (await isJeopardyHost(page)) return page;
    }
    return undefined;
  }

  private reportProblem(message: string): void {
    if (message === this.lastProblem) return;
    this.lastProblem = message;
    this.options.log(message);
  }
}

class CdpPage implements BridgePage {
  private client: CDP.Client | undefined;

  constructor(
    private target: CDP.Target,
    private readonly connection: { host: string; port: number }
  ) {}

  updateTarget(target: CDP.Target): void {
    this.target = target;
  }

  url(): string {
    return this.target.url;
  }

  async evaluate<T>(expression: string): Promise<T> {
    this.client ??= await CDP({ ...this.connection, target: this.target.id });
    const response = await this.client.Runtime.evaluate({ expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) {
      throw new Error(response.exceptionDetails.exception?.description || response.exceptionDetails.text);
    }
    return response.result.value as T;
  }

  async close(): Promise<void> {
    await this.client?.close();
    this.client = undefined;
  }
}

class CdpBrowser implements BridgeBrowser {
  private readonly pageCache = new Map<string, CdpPage>();

  constructor(private readonly connection: { host: string; port: number }) {}

  async pages(): Promise<BridgePage[]> {
    const targets = (await CDP.List(this.connection)).filter(target => target.type === "page");
    const activeIds = new Set(targets.map(target => target.id));
    for (const [id, page] of this.pageCache) {
      if (!activeIds.has(id)) {
        await page.close();
        this.pageCache.delete(id);
      }
    }
    return targets.map(target => {
      let page = this.pageCache.get(target.id);
      if (!page) {
        page = new CdpPage(target, this.connection);
        this.pageCache.set(target.id, page);
      } else {
        page.updateTarget(target);
      }
      return page;
    });
  }

  async close(): Promise<void> {
    await Promise.all([...this.pageCache.values()].map(page => page.close()));
    this.pageCache.clear();
  }
}

function cdpConnection(endpoint: string): { host: string; port: number } {
  const url = new URL(endpoint);
  return { host: url.hostname, port: Number(url.port || 9222) };
}

export async function runBridge(options: BridgeOptions = {}): Promise<void> {
  const endpoint = options.endpoint ?? "http://127.0.0.1:9222";
  const pollMs = options.pollMs ?? 250;
  const buzzinUrlPrefix = options.buzzinUrlPrefix ?? "https://buzzin.live/host";
  const log = options.log ?? (message => console.log(`[buzz-bridge] ${message}`));
  const browser = new CdpBrowser(cdpConnection(endpoint));
  const bridge = new BuzzInBridge(browser, { buzzinUrlPrefix, log });
  log(`Connected to Chrome at ${endpoint}`);

  try {
    while (!options.signal?.aborted) {
      await bridge.tick();
      await new Promise(resolve => setTimeout(resolve, pollMs));
    }
  } finally {
    await browser.close();
  }
}

function argument(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runBridge({ endpoint: argument("--cdp") }).catch(error => {
    console.error(`[buzz-bridge] ${error instanceof Error ? error.message : error}`);
    process.exitCode = 1;
  });
}
