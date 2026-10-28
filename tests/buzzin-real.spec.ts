import { expect, test } from "@playwright/test";

test.skip(!process.env.BUZZIN_REAL_E2E, "Run explicitly with npm run test:real-buzzin");

test("BuzzIn host and player pages can complete a real buzz cycle", async ({ browser }) => {
  const context = await browser.newContext();
  const host = await context.newPage();
  await host.goto("https://buzzin.live/host");

  // BuzzIn is an external service and can change independently. This smoke test
  // deliberately uses accessible labels/text instead of private network APIs.
  await expect(host.getByRole("button", { name: /clear buzzers/i })).toBeVisible();
  const roomCode = (await host.locator("body").innerText()).match(/Code\s+([A-Z0-9]{4,8})/i)?.[1];
  expect(roomCode, "BuzzIn room code should be visible after creating a room").toBeTruthy();

  const playerContext = await browser.newContext();
  const player = await playerContext.newPage();
  await player.goto("https://buzzin.live/play");
  await player.getByLabel("Game code").fill(roomCode!);
  await player.getByLabel("Your nickname").fill("Playwright Player");
  await player.getByRole("button", { name: /join game/i }).click();
  await player.getByRole("button", { name: /buzz/i }).click();
  await expect(host.locator("#playersList .rankBadge--first")).toBeVisible();

  await host.getByRole("button", { name: /clear.*buzz|reset/i }).click();
  await expect(host.locator("#playersList .rankBadge--first")).toHaveCount(0);
  await playerContext.close();
  await context.close();
});
