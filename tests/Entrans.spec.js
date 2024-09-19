const {test, expect} = require('@playwright/test') 

test('Entrans', async({page})=>{
    test.setTimeout(120000)
    await page.goto('https://entrans.io/')
    await page.hover("(//a[normalize-space()='Services'])[1]")
    await page.waitForTimeout(2000)
    await page.click("(//a[normalize-space()='Services'])[1]")
    await page.click("//span[normalize-space()='Product Engineering']")
    // Define scroll parameters
    const scrollStep = 500; // Number of pixels to scroll per step
    const delay = 1000; // Delay between each scroll step in milliseconds

    // Function to scroll incrementally until the bottom of the page is reached
    async function scrollToBottom() {
        let previousHeight;
        let currentHeight = await page.evaluate('document.body.scrollHeight');

        while (true) {
        // Scroll down by the defined step
        await page.evaluate((step) => {
            window.scrollBy(0, step);
        }, scrollStep);

        // Wait for content to load
        await page.waitForTimeout(delay);

        // Get the new height of the page
        previousHeight = currentHeight;
        currentHeight = await page.evaluate('document.body.scrollHeight');

        // Break if we reached the bottom (no height change)
        if (currentHeight === previousHeight) {
            break;
        }
        }
    }

    // Perform the scrolling
    await scrollToBottom();
    await page.waitForTimeout(400)
    await page.click("//a[normalize-space()='Project Management Tools']")
    await page.waitForTimeout(500)
    await page.click("//a[normalize-space()='Effective Communication']")
    await page.waitForTimeout(500)
    await page.click("(//a[normalize-space()='Services'])[1]")
    await page.waitForTimeout(1000)
})
