exports.RegisterPage = class RegisterPage{

    constructor(page){
        this.page = page;
        this.myaccount = "//span[normalize-space()='My Account']"
        this.registerbtn = "//a[contains(text(),'Register')]"
        this.firstname = "#input-firstname"
        this.lastname = "#input-lastname"
        this.email = "#input-email"
        this.password = "#input-password"
        this.ppCheckbox = "(//input[@type='checkbox'])[2]"
        this.continue = "//button[normalize-space()='Continue']"

    }
    async GoToPageLink(){
        await this.page.goto('https://demo-opencart.com/index.php?route=account/register&language=en-gb')
    }
    async Openregister(RFirstName,RLastName,REmailId,RPassword){
        await this.page.locator(this.myaccount).click();
        await this.page.waitForSelector(this.registerbtn)
        await this.page.click(this.registerbtn)
        await this.page.locator(this.firstname).fill(RFirstName)
        await this.page.locator(this.lastname).fill(RLastName)
        await this.page.locator(this.email).fill(REmailId)
        await this.page.locator(this.password).fill(RPassword)
        await this.page.locator(this.ppCheckbox).check()
        await this.page.locator(this.continue).click()
    }
}