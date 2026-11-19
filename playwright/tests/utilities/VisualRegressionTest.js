import { test, expect } from '@playwright/test';

function visualRegressionTest(urls) {
  urls.forEach(({ description, path, file, viewport = null }) => {
    test.describe(description, () => {
      test(`successfully loads`, async ({ page }) => {
        if (viewport) {
          await page.setViewportSize(viewport);
        }
        await page.goto(path);
        await expect(page).toHaveScreenshot(file, { fullPage: true });
      });
    });
  });
}

export default visualRegressionTest;
