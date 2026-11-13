/**
 * @file
 * Contains end-to-end tests for Audio content on an ASK site.
 */

import { test, expect } from '@playwright/test';

import Metatags from "../utilities/Metatags";

const targetPageUri = "/resources/theme-song";
const metatagList = [
  {
    name: "health.audience",
    content: "Everyone",
  },
  {
    name: "health.content_type",
    content: "Audio",
  },
  {
    name: "health.language",
    content: "English",
  },
  {
    name: "health.search_title",
    content: "The theme song",
  },
  {
    name: "health.audio_type",
    content: "Presentation",
  },
];

test.describe("The sample audio content page", () => {
  test("contains the correct Funnelback search metadata", async ({ page }) => {
    await page.goto(targetPageUri);
    const metatags = new Metatags(page, metatagList);
    await metatags.hasValueAll();
    await metatags.absent("health.video_type");
  });

  test("takes a visual regression snapshot", async ({ page }) => {
    // Take a snapshot for visual diffing.
    await page.goto(targetPageUri);
    await expect(page.locator(".node--h_audio audio")).toBeVisible();
    await expect(page).toHaveScreenshot("sample-audio.webp", { fullPage: true });
  });
});
