/**
 * @file
 * Contains end-to-end tests for app or tool content on the HGA site.
 */

import { test, expect } from '@playwright/test';

test.describe("The sample App or Tool - Hosted content page", () => {

  test("successfully loads", async ({ page }) => {
    await page.goto("/resources/rebel-base-calculator/app");
    await expect(page).toHaveScreenshot("sample-app-or-tool-hosted.webp", { fullPage: true });
  });
});
