const {test, expect} =  require('@playwright/test')

test('DatePick', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.click('#datepicker')

    const year= "2026"
    const month= "February"
    const date="14"


    while(true){
        const BYear = await page.locator('.ui-datepicker-year').textContent()
        const BMonth = await page.locator('.ui-datepicker-month').textContent()   

        if(BYear == year && BMonth == month ){
            break;
        }
        await page.locator('[title="Next"]').click()
        
    }
    await page.waitForTimeout(2000)
    /*await page.locator("//a[@class='ui-state-default']")
    const Numbs= await page.$$('.ui-state-default')
    for(const num of Numbs){
        if(await num.textContent() == date){
            await num.click()
            break;
        }
    }*/
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()    
})