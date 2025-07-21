import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage";

test("Login and Navigate to Home Page",async ({page})=> {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.waitForLoadState("load")
    
    const  loginPage = new LoginPage(page);
    
    await loginPage.loginToApplication();

    await loginPage.menuSelect("Home")

    const currentUrl = page.url()
    expect(currentUrl).toBe('https://freelance-learn-automation.vercel.app/');

})