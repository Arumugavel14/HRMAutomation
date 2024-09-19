const { test, expect } = require('@playwright/test');

test('Homepage',async ({page})=>{
    await page.goto('https://automationbookstore.dev/');

    const PageTitle = await page.title();
    console.log(PageTitle);

    await expect(page).toHaveTitle('Automation Bookstore');

    await expect(page).toHaveURL('https://automationbookstore.dev/');
    const homeUrl= await page.url();
    console.log(homeUrl);
    page.close();

})