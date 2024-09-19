const {test,expect} = require('@playwright/test')
const { log } = require('console')

test('Orange',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')
    await page.click("button[type='submit']")
    //creat Login details
    await page.click("//span[text()='PIM']")
    await page.click("//a[text()='Add Employee']")
    //const File = await page.locator("//button[@class='oxd-icon-button oxd-icon-button--solid-main employee-image-action']")
    //await File.setInputFiles("C:/Users/GOWTHAM K/Documents/Batman_DP.webp")
    await page.locator("[name='firstName']").fill('Batman')
    await page.locator("[name='lastName']").fill('DC')
    await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").check()
    //Personal details
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill('Batman')
    await page.locator("(//input[@type='password'])[1]").fill("batmanhere1")
    await page.locator("(//input[@type='password'])[2]").fill("batmanhere1")
    await page.click("button[type='submit']") 
    //Nationality Dropdown
    await page.waitForTimeout(2000)
    await page.waitForSelector("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])")
    await page.click("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])")
    const Nationality = await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//span") 
    for(let Nation of Nationality){
        page.waitForTimeout(1000)
        const DD1=await Nation.textContent()
        if(DD1.includes('Indian')){
            await Nation.click()
            break;
        }
    }
    //Marital Status
    await page.waitForSelector("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[2]")
    await page.click("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[2]")
    const MStatus= await page.$$("//div[@role='listbox']")
    for(let status of MStatus){
        page.waitForTimeout(1000)
        const value= await status.textContent()
        if(value.includes("Single")){
            await status.click()
            break
        }
    }
    //Gender CheckBox
    await page.waitForSelector("//label[normalize-space()='Male']")
    await page.locator("//label[normalize-space()='Male']").check()
    //Save the details
    await page.waitForSelector("(//button[@type='submit'])[1]")
    await page.locator("(//button[@type='submit'])[1]").click()
    //Contact details
    await page.locator("//a[text()='Contact Details']").click()
    await page.waitForTimeout(2000)
    await page.waitForSelector("(//input[@class='oxd-input oxd-input--active'])[2]")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('194 One Apartments')
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[4]").fill("Gotham city")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[5]").fill("Tamilnadu")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[6]").fill("60012")
    await page.waitForSelector("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])")
    await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])").click()
    const Countries = await page.$$("(//div[@class='oxd-select-dropdown --positon-bottom'])")
    for(let country of Countries){
        await page.waitForTimeout(1000)
        const value1= await country.textContent()
        if(value1.includes("Algeria")){
            await country.click()
            break
        }
    }
    await page.waitForSelector("(//input[@class='oxd-input oxd-input--active'])[7]")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[7]").fill("1122334455")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[8]").fill("2233223322")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[10]").fill("batman@marvel.io")
    await page.waitForSelector("(//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'])")
    await page.click("(//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'])")
    await page.click("(//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space'])[1]")
    await page.close()
})