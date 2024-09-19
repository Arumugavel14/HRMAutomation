const {test,expect} = require('@playwright/test')
const { type } = require('os')

test('KeyAction', async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')

    await page.keyboard.type('#firstName','Hello World!');

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000)
})