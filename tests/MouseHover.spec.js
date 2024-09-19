const {test, expect} = require('@playwright/test')

test('MouseHov', async({page})=>{
    await page.goto('https://demo-opencart.com/')
    const Desk=await page.locator("//a[@class='nav-link dropdown-toggle'][text()='Desktops']")
    const Mac=await page.locator("//a[@class='nav-link'][text()='Mac (2)']")
    const Lapnote= await page.locator("//a[@class='nav-link dropdown-toggle'][text()='Laptops & Notebooks']")

    await Desk.hover()
    await Mac.hover()
    await page.waitForTimeout(1400)
    await Lapnote.hover()
    await page.waitForTimeout(1400)
})