// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://76d8-2a01-113f-4201-2e00-1843-7c6-4f70-3524.ngrok.io');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright Test/);
});
