exports.LoginPage = class LoginPage{
    constructor(page){
        this.page=page
        this.myaccount = "//span[normalize-space()='My Account']"
        this.loginpagebtn = "(//a[normalize-space()='Login'])[1]"
        this.emailaddress='#input-email'
        this.password='#input-password'
        this.loginbtn="//button[@type='submit']"
    }
    /*async GoToPageLink(){
        await this.page.goto('https://demo-opencart.com/')
    }*/

    async Openlogin(LEmailId,LPassword){
        await this.page.locator(this.myaccount).click()
        await this.page.locator(this.loginpagebtn).click()
        await this.page.locator(this.emailaddress).fill(LEmailId)
        await this.page.locator(this.password).fill(LPassword)
        await this.page.locator(this.loginbtn).click()
    }
}