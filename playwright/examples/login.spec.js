import { test } from '@playwright/test';
import User from '../utilities/User';

test('user can log in', async ({ page }) => {
  const user = new User(page);
  await user.login('author', 'author');
  await page.goto("/admin/content");
});