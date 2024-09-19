const {test, expect} = require('@playwright/test')
const { log } = require('console')

test('BootDropdown',async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/')
    //Clicking on the dropdown
    await page.click('#justAnInputBox')
    const options = await page.$$('ul >li span')
    for(let option of options){
        const value = await option.textContent()
        //console.log(value);
        if(value.includes("choice 1  ")|| value.includes("choice 2 ")){
            await option.click()
            break;
        }
    }

    await page.click('#justAnInputBox1')
    const InputB1 =await page.$$('ul > li span')
    for(let inputB1 of InputB1){
        const value2 = await inputB1.textContent()
        //console.log(value2);
           if(value2.includes('choice 1') || value2.includes('choice 3')){
                await inputB1.click()
                
            }
    }
    }

)