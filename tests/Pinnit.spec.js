import { test, expect } from '@playwright/test';
import { timeout } from '../playwright.config';

test('test', async ({ page, context }) => {

    await context.tracing.start({ snapshots: true ,screenshot: true })
    await page.goto('https://testapps.strategy.ai/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('Email').click(); 
    await page.getByLabel('Field is required').click();
    await page.getByLabel('Field is required').fill('stanley.s@metphor.com');
    await page.getByLabel('Field is required').press('Tab');
    await page.locator('input[type="password"]').fill('Ironman@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByText('SHO 01/03/2025 (IT 207)').click();
    await page.locator('[id="\\39 37d8b2a-64f6-4823-906b-12ebe1b2ffd0"] > div > .q-card > .q-card__section > .slide-image > .q-img > .q-img__container > .q-img__image').click();
    await page.locator('[data-test="logo-img"]').click();
    await page.getByRole('button', { name: 'ss' }).click();
    await page.getByText('Sign Out').click();
    await context.tracing.stop({ path: 'test-trace.zip' });

})
    