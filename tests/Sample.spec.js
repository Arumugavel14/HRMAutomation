const {test,expect} = require('@playwright/test')

test('Select',async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/')
    await page.click("//a[normalize-space()='SelectElements']")
    await page.click("//li[@id='Grid Selection']")
    await page.click("//a[@title='Demo Testing Site']//span[contains(text(),'Demo Testing Site')]")
    await page.click("//a[normalize-space()='Slider']")
    

})