/**
 * @file
 * Provides a utility class to perform user login and logout actions in Drupal.
 */

import { expect } from "@playwright/test";

class User {
  constructor(page) {
    this.page = page;
  }

  /**
   * Asserts that the session cookie is absent.
   */
  async assertSessionCookieAbsent() {
    const context = await this.page.context();
    const cookies = await context.cookies();
    console.log(cookies);
    expect(cookies.some((cookie) => cookie.name.startsWith("SESS"))).toBe(false);
  }

  /**
   * Asserts that login was successful by checking for the session cookie.
   */
  async assertSessionCookieExists() {
    const context = await this.page.context();
    const cookies = await context.cookies();
    expect(cookies.some((cookie) => cookie.name.startsWith("SESS"))).toBe(true);
  }

  /**
   * Log into the site using Drupal's user login form.
   *
   * @param {string} username
   *   Name of user.
   * @param {string} password
   *   User's password.
   */
  async login(username, password) {
    await this.page.goto("/user/login");
    await this.page.getByRole('textbox', { name: 'Username (mandatory)' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password (mandatory)' }).fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
    await expect(this.page).toHaveURL(/\/user\/\d+\/?(?:[?#].*)?$/);
    await this.assertSessionCookieExists();
  }

  /**
   * Log out of the site using Drupal's user logout form.
   */
  async logout() {
    await this.page.goto("/user/logout");
    await expect(this.page).toHaveURL(/\/user\/logout\/confirm/);
    await this.page.getByRole('button', { name: 'Log out' }).click();
    await this.assertSessionCookieAbsent();
  }
}

export default User;
