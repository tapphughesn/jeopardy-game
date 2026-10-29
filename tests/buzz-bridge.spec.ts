import { expect, test } from "@playwright/test";
import { pathToFileURL } from "node:url";
import { join } from "node:path";
import { BuzzInBridge } from "../src/bridge.js";
import type { BridgeBrowser } from "../src/bridge.js";

const root = process.cwd();
const gameUrl = pathToFileURL(join(root, "jeopardy.html")).href;
const mockBuzzUrl = pathToFileURL(join(root, "tests/fixtures/buzzin-host.html")).href;

function bridgeBrowser(browser: import("@playwright/test").Browser): BridgeBrowser {
  return {
    pages: async () => browser.contexts().flatMap(context => context.pages()).map(page => ({
      url: () => page.url(),
      evaluate: <T>(expression: string) => page.evaluate(code => globalThis.eval(code) as T, expression)
    }))
  };
}

test("a buzz hides only the audience clue and clearing restores it", async ({ browser }) => {
  const context = await browser.newContext();
  const host = await context.newPage();
  const buzz = await context.newPage();
  await host.goto(gameUrl);
  await buzz.goto(mockBuzzUrl);

  await host.getByRole("button", { name: "Start new game" }).click();
  const audiencePromise = context.waitForEvent("page");
  await host.getByRole("button", { name: "Launch audience display" }).click();
  const audience = await audiencePromise;
  await audience.waitForLoadState();
  await expect.poll(() => audience.evaluate(() => document.documentElement.scrollHeight <= window.innerHeight)).toBe(true);

  await host.locator("button.clue-tile").first().click();
  await expect(host.locator("#clueText")).toContainText("macabre poet");
  await expect(audience.locator("#boardArea .clue-text")).toContainText("macabre poet");
  await expect.poll(() => audience.evaluate(() => document.documentElement.scrollHeight <= window.innerHeight)).toBe(true);

  const bridge = new BuzzInBridge(bridgeBrowser(browser), {
    buzzinUrlPrefix: mockBuzzUrl,
    log: () => undefined
  });
  await bridge.tick();
  await buzz.locator("#playersList").evaluate(list => {
    const rank = document.createElement("span");
    rank.className = "rankBadge rankBadge--first";
    list.append(rank);
  });
  await bridge.tick();

  await expect(audience.locator("[data-buzz-hidden='true']")).toBeVisible();
  await expect(audience.locator("#boardArea .clue-text")).toHaveText("Buzz!");
  await expect(host.locator("#clueText")).toContainText("macabre poet");

  await buzz.locator(".rankBadge--first").evaluate(element => element.remove());
  await bridge.tick();
  await expect(audience.locator("[data-buzz-hidden='true']")).toHaveCount(0);
  await expect(audience.locator("#boardArea .clue-text")).toContainText("macabre poet");
  await context.close();
});

test("the game remains fully usable without the optional bridge", async ({ page }) => {
  await page.goto(gameUrl);
  await expect(page.locator("#buzzStatus")).toHaveText("BuzzIn automation off (optional)");
  await expect(page.locator("#openBuzzInBtn")).toHaveAttribute("href", "https://buzzin.live/host");
  await page.getByRole("button", { name: "Start new game" }).click();
  await page.locator("button.clue-tile").first().click();
  await expect(page.locator("#clueText")).toContainText("macabre poet");
});

test("buzz events never hide a Daily Double", async ({ browser }) => {
  const context = await browser.newContext();
  const host = await context.newPage();
  await host.goto(gameUrl);
  await host.getByRole("button", { name: "Start new game" }).click();
  const audiencePromise = context.waitForEvent("page");
  await host.getByRole("button", { name: "Launch audience display" }).click();
  const audience = await audiencePromise;
  await audience.waitForLoadState();

  // Round one, fourth category, fourth row is the configured Daily Double.
  await host.locator("button.clue-tile").nth(21).click();
  await expect(audience.locator(".daily-banner")).toHaveText("DAILY DOUBLE!");
  await host.locator("#dailySetup [data-player]").first().click();
  await host.getByRole("button", { name: /lock wager & show clue/i }).click();
  await expect(audience.locator("#boardArea .clue-text")).toContainText("Before Vatican City");

  await host.evaluate(() => {
    window.dispatchEvent(new CustomEvent("jeopardy-buzz-bridge", { detail: { type: "buzz" } }));
  });
  await expect(audience.locator("[data-buzz-hidden='true']")).toHaveCount(0);
  await expect(audience.locator("#boardArea .clue-text")).toContainText("Before Vatican City");
  await context.close();
});
