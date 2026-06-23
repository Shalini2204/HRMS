import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test('HRMS Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://hrms.keelis.in/sign-in');

    await loginPage.login(
        'shalini.r@keelis.com',
        'Shalini@123'
    );

    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('https://hrms.keelis.in/dashboard');

   
});