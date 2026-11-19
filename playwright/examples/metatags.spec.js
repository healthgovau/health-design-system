import { test, expect } from '@playwright/test';
import Metatags from '../utilities/Metatags';

test.describe('Metatags helper', () => {
  test('awaits every metadata assertion, including delayed content', async ({ page }) => {
    await page.setContent('<head><meta name="health.audience" content="Everyone"></head>');
    const metatags = new Metatags(page, [
      { name: 'health.audience', content: 'Everyone' },
      { name: 'health.search_title', content: 'The theme song' },
    ]);

    await page.evaluate(() => {
      setTimeout(() => {
        const meta = document.createElement('meta');
        meta.name = 'health.search_title';
        meta.content = 'The theme song';
        document.head.append(meta);
      }, 100);
    });

    await metatags.hasValueAll();
    expect(await page.locator('meta[name="health.search_title"]').getAttribute('content'))
      .toBe('The theme song');
  });

  test('rejects incorrect metadata content', async ({ page }) => {
    await page.setContent('<head><meta name="health.audience" content="Everyone"></head>');
    const metatags = new Metatags(page, [
      { name: 'health.audience', content: 'Incorrect audience' },
    ]);

    await expect(metatags.hasValueAll()).rejects.toThrow(/toHaveAttribute/);
  });

  test('rejects missing metadata', async ({ page }) => {
    await page.setContent('<head></head>');
    const metatags = new Metatags(page);

    await expect(metatags.hasValue('health.search_title', 'The theme song'))
      .rejects.toThrow(/health.search_title/);
  });

  test('recognizes attached metadata without requiring visibility', async ({ page }) => {
    await page.setContent('<head><meta name="health.audience" content="Everyone"></head>');
    const metatags = new Metatags(page);

    await metatags.present('health.audience');
    await metatags.absent('health.video_type');
  });
});
