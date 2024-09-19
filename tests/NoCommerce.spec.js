const {test,expect} = require('@playwright/test')

test('Ecommerce', async({page})=>{
    //launching the url on browser
    await page.goto('https://demo.nopcommerce.com/')

    await page.click('.ico-register')
    expect.soft(page).toHaveTitle('nopCommerce demo store. Register')
    page.check('#gender-male')
    await expect(page.check('#gender-male')).toBeChecked()
    await page.waitForTimeout(2000)
    await page.locator('#FirstName').fill('Sixface')
    await page.locator('#LastName').fill('Vel')
    await page.locator('#Email').fill('6face@gmail.com')

    const CheckBoxNew = await page.locator('#Newsletter')
    await expect(CheckBoxNew).toBeChecked
    

})