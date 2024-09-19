const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('Example', async({page})=>{
    test.setTimeout(120000)
    /*await page.goto('https://testautomationpractice.blogspot.com/')
    let date = "09/11/2024"
    await page.fill("#datepicker",date )
    await page.waitForTimeout(2500)

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let FirstDate = "16/09/2024"
    let LastDate = "17/09/2024"

    await page.fill("input[placeholder='Start date']", FirstDate)
    await page.fill("input[placeholder='End date']", LastDate)
    await page.waitForTimeout(2500)*/

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.click("//button[@type='submit']")
    
    await page.click("//span[normalize-space()='Leave']")
    let date = '2024-11-09'
    let date2 = '2024-11-12'
    await page.fill("(//input[@placeholder='yyyy-dd-mm'])[1]", date)
    await page.fill("(//input[@placeholder='yyyy-dd-mm'])[2]", date2)
    //await page.pause()
    const dropdown = await page.locator("(//div[contains(.,'-- Select --')])[.='-- Select --'][1]").click()
    await page.getByText('Scheduled').click()
    expect(page.locator("//span[text()='Scheduled ']")).toBeVisible()
    expect(page.locator("//button[text()=' Upgrade']")).toBeVisible()
    await page.waitForTimeout(3000)
})