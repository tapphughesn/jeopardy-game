import { spawn, type ChildProcess } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runBridge } from "./bridge.js";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const profilePath = join(projectRoot, ".buzzin-chrome-profile");
const endpoint = "http://127.0.0.1:9222";

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

async function waitForChrome(child: ChildProcess): Promise<void> {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    if (child.exitCode != null) throw new Error(`Chrome exited early with code ${child.exitCode}`);
    try {
      const response = await fetch(`${endpoint}/json/version`);
      if (response.ok) return;
    } catch {
      // Chrome is still starting.
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error("Timed out waiting for Chrome's local debugging connection.");
}

async function main(): Promise<void> {
  mkdirSync(profilePath, { recursive: true });
  const gameUrl = pathToFileURL(join(projectRoot, "jeopardy.html")).href;
  const chrome = spawn(chromeExecutable(), [
    "--remote-debugging-address=127.0.0.1",
    "--remote-debugging-port=9222",
    `--user-data-dir=${profilePath}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--new-window",
    gameUrl,
    "https://buzzin.live/host"
  ], { stdio: "ignore" });

  const controller = new AbortController();
  const stop = () => {
    controller.abort();
    if (chrome.exitCode == null) chrome.kill("SIGTERM");
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);

  await waitForChrome(chrome);
  console.log("Jeopardy and BuzzIn are open in a dedicated Chrome window.");
  console.log("Keep this terminal running while you use automatic buzz hiding. Press Ctrl+C to stop.");
  await runBridge({ endpoint, signal: controller.signal });
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
