import { test, expect } from '@playwright/test';

function visualRegressionTest(urls) {
  urls.forEach(({ description, path, file }) => {
    test.describe(description, () => {
      test(`successfully loads`, async ({ page }) => {
        console.log(page.goto);
        await page.goto(path);
        await expect(page).toHaveScreenshot(file, { fullPage: true });
      });
    });
  });
}

export default visualRegressionTest;
