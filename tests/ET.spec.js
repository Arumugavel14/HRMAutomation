const {test,expect} = require('@playwright/test')
const { type } = require('os')

test('Ecommerce', async({page})=>{
    test.setTimeout(110000)
    //launching the url on browser
    await page.goto('http://3.109.203.55/login')

    await page.locator('#email').fill('saranya@entrans.io')
    await page.locator('#password').fill('Entrans@123')
    await page.locator("//button[text()='Login']").click()
    await page.waitForSelector("//div[contains(text(),' User Management ')]")
    await page.click("//div[contains(text(),' User Management ')]")
    await page.click("//span[contains(text(),'Users')]")
    await page.waitForSelector("//button[@class='btn btn-success btn-chlorella-green p-2 mr-2']")
    await page.click("//button[@class='btn btn-success btn-chlorella-green p-2 mr-2']")

    //Personal information
    await page.locator("#firstName").fill("Automation")
    await page.locator("#lastname").fill("Testing")
    await page.click("#dateOfBirth",'14-02-2000')
    await page.locator("//select[@formcontrolname='religion']").selectOption('Hindu')
    await page.locator("//select[@formcontrolname='nationality']").selectOption('Indian')
    await page.locator("//select[@formcontrolname='gender']").selectOption('Male')
    await page.locator("//select[@formcontrolname='bloodGroup']").selectOption('AB+')
    await page.locator("#aadharNumber").fill("999999990019")
    await page.locator("//select[@formcontrolname='maritalStatus']").selectOption('Single')
    await page.locator("#pan").fill('ABCTY1234D')

    //Professional information
    await page.click("//a[normalize-space()='Professional']")
    await page.locator("#EmployeeID").fill("ET012")
    await page.locator("#Designation").fill("Quality Analyst")
    await page.click("#DateofJoining","02-06-2024")
    await page.locator("//select[@formcontrolname='roleId']").selectOption("User")
    await page.locator("#primarySkill").fill('Manual testing')
    await page.click("(//button[@class='btn btn-success btn-chlorella-green p-2 ml-2'])[1]")
    await page.locator("#secondarySkill").fill('Automation testing')
    await page.click("(//button[@class='btn btn-success btn-chlorella-green p-2 ml-2'])[2]")
    await page.locator("//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-invalid']").selectOption('Nazareth')
    await page.click("//label[contains(text(),'Fresher ')]")

    //Contact information
    await page.click("//a[normalize-space()='Contact']")
    await page.locator('#mobileNumber').fill('9029883627')
    await page.locator('#alternateMobileNumber').fill('9909324267')
    await page.locator('#PersonalMailID').fill('muditupoda@gmail.com')
    await page.locator('#OfficialMailID').fill('muditupoda@gmail.com')
    await page.locator("#permanentAddress").fill("11, permanent street")
    await page.locator("(//input[@id='State'])[1]").fill("Abu dhabi")
    await page.locator("(//input[@id='District'])[1]").fill("Tiruchendur")
    await page.locator("(//input[@id='City'])[1]").fill("Nazerath")
    await page.locator("(//input[@id='Pincode'])[1]").fill("334407")
    await page.click("(//label[normalize-space()='Same as Permanent Address'])[1]")

    await page.locator('#Name').fill('Friend')
    await page.locator('#Relation').fill('frd')
    await page.locator('#ContactNumber').fill('9932324455')
    await page.locator('#Location').fill('Heaven')

    //Bank information
    await page.click("//a[normalize-space()='Bank']")
    await page.locator("#AccountName").fill('TestAccount')
    await page.locator("#AccountNumber").fill('99988800')
    await page.locator("//select[@formcontrolname='bankName']").selectOption('SBI')
    await page.locator("//select[@formcontrolname='branchName']").selectOption('Virugambakam')
    await page.locator("#ifsc").fill('SBIN00991')
    await page.locator("//select[@class='form-control form-control-sm ng-untouched ng-pristine ng-invalid']").selectOption('No')
    
    //Education information
    await page.click("//a[normalize-space()='Education']")
    await page.locator("//label[normalize-space()='UG']")
    await page.locator("#instituteName").fill('Dubakoor College')
    await page.locator("//input[@id='Percentage/CGPA']").fill('8.5')
    await page.click("#From","03-06-2019")
    //await page.locator("#From").fill("03-03-2019")
    await page.click("#To","03-06-2022")
    await page.locator("#Specialization").fill('Mechanical Engg')
    //Family information
    await page.click("//a[normalize-space()='Family']")
    await page.locator("#Name").fill('Daddy')
    await page.click("#dateOfBirth",'14-02-2000')
    await page.locator("//select[@formcontrolname='relation']").selectOption('Father')
    await page.locator("#Age").fill('24')
    await page.locator("//select[@formcontrolname='gender']").selectOption('Male')
    await page.click("//button[normalize-space()='Add to Grid']") //button[normalize-space()='Add to Grid']
    //Document Upload
    await page.click("//a[normalize-space()='Documents']")
    await page.locator("(//input[@id='file-input'])[1]").setInputFiles("/Users/GOWTHAM K/Pictures/Paulharanresume2y.pdf")
    

})