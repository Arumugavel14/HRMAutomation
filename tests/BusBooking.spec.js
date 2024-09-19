const {test, expect} = require('@playwright/test')

test('BusBooking', async({page})=>{
    await page.goto('https://www.makemytrip.com/bus-tickets/')
    await page.click('.commonModal__close')

    await page.click('#fromCity','che')
    const FromLists = await page.$$('div> p>span')
    for(let Fromlist of FromLists ){
        const value = await Fromlist.textContent()
        if(value.includes('Chennai, Tamil Nadu')){
            await Fromlist.click
        }
    }
    await page.waitForTimeout(2500)  
    await page.click('#toCity','Coim') 
    const ToLists = await page.$$('div> p>span')
    for(let ToList of ToLists){
        const value2 = await ToList.textContent()
        if(value2.includes('Coimbatore, Tamil Nadu')){
            await ToList.click()
        }
    }

    await page.click('#travelDate')
    await page.click("div[aria-label='Wed Jul 17 2024']")
    await page.click("#search_button")
    await page.waitForTimeout(2500)   
})