const {test,expect} =require('@playwright/test')
const exp = require('constants')

test('Store',async ({page})=>{
    //To open the URL on the browser
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    await page.click('#login2')
    const PageTitle=await expect(page).toHaveTitle('STORE')
    console.log(PageTitle);
    
    await page.locator('#loginusername').fill('ArumugavelK')
    await page.locator('#loginpassword').fill('6Face')

    await page.click("//button[normalize-space()='Log in']")
    await page.click("//div[@id='logInModal']//span[@aria-hidden='true'][normalize-space()='×']")

    await page.locator("a[data-target='#exampleModal']").click();
    await page.locator('#recipient-email').fill('test@gmail.com')
    await page.locator('#recipient-name').fill('Atul')
    await page.locator('#message-text').fill('Hi Thanks for creating this website')
    await page.waitForTimeout(1000)
    await page.click("button[onclick='send()']")

    await page.click('//a[3]')
    await page.locator("//a[normalize-space()='Sony vaio i5']").click()
    const PageText = await page.locator("div[id='more-information'] strong")
    await expect(PageText).toHaveText('Product description')

    await page.click('.btn.btn-success.btn-lg')
    await page.waitForTimeout(2000)
    await page.close()

})