const {test, expect} = require('@playwright/test')

test('Handling',async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.click("#alertbtn")
    await page.waitForTimeout(2500)
})