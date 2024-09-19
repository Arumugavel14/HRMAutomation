import { test, expect } from '@playwright/test';
import exp from 'constants';

let page;

test.beforeAll(async({browser})=>{
    page = await browser.newPage()

    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')
    await page.locator('#loginusername').fill('Arumugavelk')
    await page.locator('#loginpassword').fill('6Face')
    await page.click("//button[text()='Log in']")

})

//TO search and Add items to cart
test('Click', async()=>{
    await page.click("//a[text()='Samsung galaxy s6']")
    await page.waitForTimeout(2000)
    await page.click("//a[text()='Add to cart']")
    await page.waitForTimeout(2000)

//TO handle alerts
    /*await page.on('dialog',async dialog=>{
        await dialog.waitForTimeout(2500)
        await dialog.accept()
    })*/

//Purchasing an item
    await page.click('#cartur')
    await page.click("//button[text()='Place Order']")
    await page.waitForTimeout(1500)
    await page.click('#name','SixFace')
    await page.click('#country','India')
    await page.click('#city','Ambasamudram')
    await page.click('#card','SBIN0945Z')
    await page.click('#month','12')
    await page.click('#year','2028')
    await page.click("//button[text()='Purchase']")
    await page.waitForTimeout(1500)
    await page.click("//button[text()='OK']")
    await page.waitForTimeout(1500)
})
test.afterAll(async()=>{
    await page.click('#logout2')
    await page.waitForTimeout(2000)
})