const {test, expect} = require('@playwright/test')

test('UploadF',async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')

    await page.locator('#uploadPicture').setInputFiles("C:\Users\GOWTHAM K\Pictures\Screenshots\Create 1.png")
})