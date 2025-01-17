import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testapps.strategy.ai/sign-in');
  await page.locator('input[name="email"]').fill('stanley.s@metphorcom');
  await page.locator('input[name="email"]').press('Tab');
  await page.getByLabel('', { exact: true }).fill('Ironman@123');
  await page.getByLabel('', { exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
});