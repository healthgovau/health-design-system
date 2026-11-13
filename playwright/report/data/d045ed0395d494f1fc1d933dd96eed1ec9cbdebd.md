# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: callout.spec.js >> Callout - Colour Quaternary >> successfully loads
- Location: playwright/tests/utilities/VisualRegressionTest.js:6:7

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: page.goto: Test timeout of 15000ms exceeded.
Call log:
  - navigating to "http://host.docker.internal:3000/components/preview/callout--colour---quaternary", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | function visualRegressionTest(urls) {
  4  |   urls.forEach(({ description, path, file, viewport = null }) => {
  5  |     test.describe(description, () => {
  6  |       test(`successfully loads`, async ({ page }) => {
  7  |         if (viewport) {
  8  |           await page.setViewportSize(viewport);
  9  |         }
> 10 |         await page.goto(path);
     |                    ^ Error: page.goto: Test timeout of 15000ms exceeded.
  11 |         await expect(page).toHaveScreenshot(file, { fullPage: true });
  12 |       });
  13 |     });
  14 |   });
  15 | }
  16 | 
  17 | export default visualRegressionTest;
  18 | 
```