const {test, expect} = require('@playwright/test')

test('PracticeWebsite',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    // await page.fill('#name','6Face')
    // await page.fill('#email','6vel@gmail.com')
    // await page.fill('#phone','8733827782')
    // await page.fill('#textarea','01, dubai kurukku sandhu, dubai')
    // //await page.waitForTimeout(3000)

    // await page.locator('#male').check()
   
    // await page.locator('#sunday').check()
    // await page.locator('#monday').check()
    // //await page.waitForTimeout(1200)

    // const CheckLocator = ['#sunday','#monday']
    // for(const checkBox of CheckLocator){
    //     if(page.locator(checkBox).isChecked()){
    //         await page.locator(checkBox).uncheck()
    //     }
    // }
    await page.selectOption('#country','India')
    //await page.waitForTimeout(3000)
    await page.selectOption('#colors', 'red', 'blue')
    expect(page.selectOption('#colors', 'red', 'blue'))
    await page.waitForTimeout(1200)
    await page.close()
})