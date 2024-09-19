const {test, expect} = require('@playwright/test')
test('MouseRight',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    button.click({button: 'right'})
    await page.waitForTimeout(1400)
    page.locator("//span[text()='Cut']").click()
    await page.waitForTimeout(2400)
})