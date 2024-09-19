const {test, expect} = require('@playwright/test')

test('Orange', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.click("//button[@type='submit']")

    await page.click("//span[normalize-space()='PIM']")
    await page.locator("//a[normalize-space()='Add Employee']").click()
    await page.waitForSelector("//input[@placeholder='First Name']")
    await page.locator("//input[@placeholder='First Name']").fill('Dummy')
    await page.locator("//input[@placeholder='Last Name']").fill('Tumty')
    await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").check()
    await page.waitForSelector("(//div//input[@class='oxd-input oxd-input--active'])[3]")
    await page.locator("(//div//input[@class='oxd-input oxd-input--active'])[3]").fill("Dummmy")
    await page.locator("(//input[@type='password'])[1]").fill("dummm01")
    await page.locator("(//input[@type='password'])[2]").fill("dummm01")
    await page.click("//button[@type='submit']")

    await page.waitForSelector("(//input[@class='oxd-input oxd-input--focus'])")
    await page.click("(//input[@class='oxd-input oxd-input--focus'])")

    const month="July"
    const year="2026"
    const date="15"

    while(true){
        const Lmonth = await page.locator(".oxd-calendar-selector-month").textContent()
        const Lyear = await page.locator(".oxd-calendar-selector-year").textContent()

        if(Lmonth == month && Lyear == year){
            break
        }
        await page.locator("(//button[@class='oxd-icon-button'])[3]").click()
    }
    await page.pause()
})