const {test,expect, chromium} = require('@playwright/test')

test('MakeMyTrip',async({})=>{
    test.setTimeout(120000)

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page = await context.newPage()
    await page.goto('https://www.makemytrip.com/')

    await page.locator("//span[@class='commonModal__close']").click()


    await page.waitForSelector("(//a[@href='https://www.makemytrip.com/bus-tickets/'])")
    await page.click("(//a[@href='https://www.makemytrip.com/bus-tickets/'])")
    await page.waitForSelector("#fromCity")
    await page.click("#fromCity")
    await page.locator("//input[@placeholder='From']").fill("Tirunelveli")
    await page.click("//span[normalize-space()='Tirunelveli, Tamil Nadu']")
    await page.locator("//input[@placeholder='To']").fill("Chennai")
    await page.click("//span[normalize-space()='Chennai, Tamil Nadu']")
    await page.waitForSelector("div[aria-label='Sat Aug 03 2024']")
    await page.locator("div[aria-label='Sat Aug 03 2024']").click()
    await page.click("#search_button")


    await page.waitForSelector("//span[normalize-space()='Non AC']")
    await page.click("//span[normalize-space()='Non AC']")
    await page.locator("//span[normalize-space()='New Bus Stand']").click()
    await page.click("(//span[contains(text(),'6 PM to 11 PM')])[1]")
    await page.waitForSelector("(//p[contains(text(),'Shalom Career')])[2]")
    await page.click("(//p[contains(text(),'Shalom Career')])[2]")
    await page.locator("(//span[@class='listingSprite infoIcon appendRight5 infoIconSelectSeat'])[1]").hover()
    await page.click("//span[normalize-space()='Kilambakkam']")
    await page.click("(//span[contains(text(),'₹850')])[5]")
    await page.click("(//span[contains(text(),'Continue')])")
    await page.waitForSelector("//input[@placeholder='Enter coupon code']")
    await page.locator("//input[@placeholder='Enter coupon code']").fill('Bestbus')
    await page.click(".couponApplyBtn.textCenter")
    await page.hover("//span[.='View Policies']")
    await page.locator("#fname").fill("Arumugavel")
    await page.locator("#age").fill('24')
    await page.click(".maleTab")
    await page.locator("(//p[@for='cb_gst_info'])[1]").click()
    await page.locator("#contactEmail").fill('arumugavelk1@gmail.com')
    await page.locator("#mobileNumber").fill("9952104627")
    await page.check(".switch")
    await page.locator("//input[@name='GST No']").fill('29GGGGG1314R9Z6')
    await page.locator("#companyname").fill("Mannar & Co")
    //await page.waitForTimeout(3000)

})