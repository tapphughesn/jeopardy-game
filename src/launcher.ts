import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium, type Browser, type Page } from "playwright-core";
import { monitorBridge, type BridgeBrowser, type BridgePage } from "./bridge.js";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

function chromeExecutable(): string {
  const candidates = [
    process.env.CHROME_PATH,
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  ].filter((candidate): candidate is string => Boolean(candidate));
  const executable = candidates.find(existsSync);
  if (!executable) throw new Error("Chrome was not found. Set CHROME_PATH to the Chrome or Chromium executable.");
  return executable;
}

class PlaywrightBridgePage implements BridgePage {
  constructor(private readonly page: Page) {}

  url(): string {
    return this.page.url();
  }

  async evaluate<T>(expression: string): Promise<T> {
    return this.page.evaluate<T>(expression);
  }
}

class PlaywrightBridgeBrowser implements BridgeBrowser {
  private readonly wrappers = new Map<Page, PlaywrightBridgePage>();

  constructor(private readonly browser: Browser) {}

  async pages(): Promise<BridgePage[]> {
    const pages = this.browser.contexts().flatMap(context => context.pages()).filter(page => !page.isClosed());
    const active = new Set(pages);
    for (const page of this.wrappers.keys()) {
      if (!active.has(page)) this.wrappers.delete(page);
    }
    return pages.map(page => {
      let wrapper = this.wrappers.get(page);
      if (!wrapper) {
        wrapper = new PlaywrightBridgePage(page);
        this.wrappers.set(page, wrapper);
      }
      return wrapper;
    });
  }

  async close(): Promise<void> {
    await this.browser.close();
  }
}

async function main(): Promise<void> {
  const browser = await chromium.launch({
    executablePath: chromeExecutable(),
    headless: false,
    args: ["--no-first-run", "--no-default-browser-check"]
  });
  const context = await browser.newContext({ viewport: null });
  const gamePage = await context.newPage();
  await gamePage.goto(pathToFileURL(join(projectRoot, "jeopardy.html")).href);

  const controller = new AbortController();
  const stop = () => controller.abort();
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);

  console.log("Jeopardy is open in a dedicated Chrome window. Use its Open BuzzIn host button when ready.");
  console.log("Keep this terminal running while you use automatic buzz hiding. Press Ctrl+C to stop.");
  console.log("[buzz-bridge] Connected through Chrome's local automation pipe.");
  await monitorBridge(new PlaywrightBridgeBrowser(browser), { signal: controller.signal });
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
