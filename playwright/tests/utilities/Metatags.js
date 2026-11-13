/**
 * @file
 * Provides a Metatag class to perform metatag based operations.
 */

import { expect } from '@playwright/test';

class Metatags {
  page;

  metatags = [];

  constructor(page, metatags = []) {
    this.page = page;
    this.metatags = metatags;
  }

  /**
   * Add a metatag to test collection.
   *
   * @param {object} metatag
   *   Name and expected content of a metatag. For example:
   *   {
   *      name: "health.content_type",
   *      content: "Publication"
   *   }
   */
  add(metatag) {
    this.metatags.push(metatag);
  }

  /**
   * Remove all metatags from the test collection.
   */
  removeAll() {
    this.metatags = [];
  }

  /**
   * Test that all metatags in the collection have the expected values.
   */
  async hasValueAll() {
    for (const item of this.metatags) {
      await this.hasValue(item.name, item.content);
    }
  }

  /**
   * Check that a metatag has a particular value.
   *
   * @param {string} name
   *   Name of target metatag.
   * @param {string} value
   *   Expected value of the target metatag.
   */
  async hasValue(name, value) {
    await expect(this.page.locator(`head meta[name="${name}"]`))
      .toHaveAttribute('content', value);
  }

  /**
   * Check that a metatag is present in the page's <head> element.
   *
   * @param {string} name
   *   Name of the metatag.
   */
  async present(name) {
    await expect(this.page.locator(`head meta[name="${name}"]`).first())
      .toBeAttached();
  }

  /**
   * Check that a metatag is not present in the page's <head> element.
   *
   * @param {string} name
   *   Name of the metatag.
   */
  async absent(name) {
    await expect(this.page.locator(`head meta[name="${name}"]`)).toHaveCount(0);
  }
}

export default Metatags;
