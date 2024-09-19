const {test, expect} = require('@playwright/test')

test('DbClick',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const CopyBtn= await page.locator("//button[text()='Copy Text']")
    await CopyBtn.dblclick()
    await page.waitForTimeout(1500)
})