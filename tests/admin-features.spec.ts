import { expect, test } from "@playwright/test";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const gameUrl = pathToFileURL(join(process.cwd(), "jeopardy.html")).href;

test("host board identifies Daily Doubles without revealing them to the audience", async ({ browser }) => {
  const context = await browser.newContext();
  const host = await context.newPage();
  await host.goto(gameUrl);
  await host.getByRole("button", { name: "Start new game" }).click();

  const dailyDouble = host.locator("button.clue-tile.daily-double-host");
  await expect(dailyDouble).toHaveCount(1);
  await expect(dailyDouble).toContainText("DD");
  await expect(dailyDouble).toHaveAttribute("aria-label", /Daily Double/);

  const audiencePromise = context.waitForEvent("page");
  await host.getByRole("button", { name: "Launch audience display" }).click();
  const audience = await audiencePromise;
  await audience.waitForLoadState();
  await expect(audience.locator(".daily-double-marker, .daily-double-host")).toHaveCount(0);
  await context.close();
});

test("host can start each response timer duration in the audience clue view", async ({ browser }) => {
  const context = await browser.newContext();
  const host = await context.newPage();
  await host.goto(gameUrl);
  await host.getByRole("button", { name: "Start new game" }).click();

  const audiencePromise = context.waitForEvent("page");
  await host.getByRole("button", { name: "Launch audience display" }).click();
  const audience = await audiencePromise;
  await audience.waitForLoadState();

  await host.locator("button.clue-tile:not(.daily-double-host)").first().click();
  for (const duration of [5, 10, 30]) {
    await host.getByRole("button", { name: `${duration} seconds` }).click();
    const startingSeconds = new RegExp(`^(?:${duration}|${duration - 1}) seconds?$`);
    await expect(host.locator("#clueTimerHostCountdown")).toHaveText(startingSeconds);
    await expect(audience.locator("#clueTimerCountdown")).toHaveAttribute("aria-label", new RegExp(`Response timer: (?:${duration}|${duration - 1}) seconds?`));
    await expect(audience.locator("#clueTimerCountdown .clue-timer-icon")).toHaveText("⌛");
  }

  await context.close();
});

test("round transition advances even when clues remain", async ({ page }) => {
  await page.goto(gameUrl);
  await page.getByRole("button", { name: "Start new game" }).click();
  await page.getByRole("button", { name: /Continue to Double Jeopardy \(clues remain\)/ }).click();
  await expect(page.locator("#stageLabel")).toHaveText("Double Jeopardy!");
  await expect(page.getByRole("button", { name: /Continue to Final Jeopardy \(clues remain\)/ })).toBeVisible();
});
