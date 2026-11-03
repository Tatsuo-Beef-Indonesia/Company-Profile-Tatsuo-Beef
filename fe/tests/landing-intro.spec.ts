import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 }, isMobile: true });

test("intro progresses and releases mobile page when assets never decode", async ({
  page,
}) => {
  await page.addInitScript(() => {
    HTMLImageElement.prototype.decode = () => new Promise(() => {});
    Object.defineProperty(document.fonts, "ready", {
      get: () => new Promise(() => {}),
    });
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".landing-intro-count")).not.toHaveText("000");
  await expect(page.locator(".home-v2")).toHaveAttribute(
    "data-intro",
    "ready",
    { timeout: 10000 },
  );
  await expect(page.locator(".landing-intro")).toHaveCount(0);
  await expect
    .poll(() =>
      page.locator("#main").evaluate((el) => el instanceof HTMLElement && el.inert),
    )
    .toBe(false);
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .not.toBe("hidden");
});

test("intro handles synchronous decode errors without locking the page", async ({
  page,
}) => {
  await page.addInitScript(() => {
    HTMLImageElement.prototype.decode = () => {
      throw new Error("decode unavailable");
    };
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".home-v2")).toHaveAttribute(
    "data-intro",
    "ready",
    { timeout: 10000 },
  );
  await expect(page.locator(".landing-intro")).toHaveCount(0);
});

test("intro fails open when JavaScript cannot hydrate", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".landing-intro")).toHaveCSS(
      "visibility",
      "hidden",
      { timeout: 12000 },
    );
    await expect(page.locator(".hero-copy")).toHaveCSS("visibility", "visible");
  } finally {
    await context.close();
  }
});
