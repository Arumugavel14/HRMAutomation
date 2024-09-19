const {test, expect} = require('@playwright/test')

test('Frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']",'BatMan')
    await page.waitForTimeout(2500)

    const frame2 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    await frame2.fill("[name='mytext3']",'The JokeR')
    await page.waitForTimeout(2500)
    const ChildF=await frame2.childFrames()
    await ChildF[0].locator("div[id='i8'] div[class='AB7Lab Id5V1']").check()
    await ChildF[0].locator("div[id='i22'] div[class='uHMk6b fsHoPb']").check()
    await ChildF[0].locator("div[id='i19'] div[class='uHMk6b fsHoPb']").check()
    
    await frame2.waitForTimeout(2000)
})