const {test, expect} = require('@playwright/test')

test('WebT',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table=await page.locator('#productTable')
    const column = table.locator('thead tr th')
    console.log('Number of columns:',await column.count());

    const rows= table.locator('tbody tr')
    console.log('No of rows:',await rows.count());

   /*const MatchRow=rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })
    await MatchRow.locator('Input').check()*/

    await CheckProducts(page, rows, 'Product 1')
    await CheckProducts(page, rows, 'Product 3')
    await CheckProducts(page, rows, 'Product 2')
    await page.waitForTimeout(2000)
    await UnCheckProducts(page, rows, 'Product 1')
    await page.waitForTimeout(2000)
})

async function CheckProducts(page, rows, name){
    
    const MatchRow=rows.filter({
        has: page.locator('td'),                    // Yet to continued this session 
        hasText: name
    })
    await MatchRow.locator('Input').check()
}
async function UnCheckProducts(page, rows, name){
    
    const MatchRow=rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await MatchRow.locator('Input').uncheck()
}