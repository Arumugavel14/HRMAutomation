const {test, expect} = require('@playwright/test') 
test('Drag&Drop', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
    const Washington = await page.locator('#box3')
    const Usa = await page.locator('#box103')
    const Rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')

    await Washington.hover()
    await page.mouse.down()

    await Usa.hover()
    await page.mouse.up()

    await Rome.dragTo(Italy)
    await page.waitForTimeout(1300)
})