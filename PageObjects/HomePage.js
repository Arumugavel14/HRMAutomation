exports.HomePage = class HomePage{

    constructor(page){
        this.page= page
        this.desktop = "(//a[contains(text(),'Desktops')])[1]"
        this.mac="(//a[normalize-space()='Mac (2)'])[1]"
        this.product="(//a[contains(text(),'iMac')])[2]"
        this.quantity='#input-quantity'
        this.checknbox="(//label[contains(text(),'Checkbox 1')])"
        this.addToCart="//button[@id='button-cart']"
        this.closeProduct=".close-item3"
    }
    async GoToHomepage(){
        await this.page.goto('https://demo-opencart.com/')
    }
    async OpenHomepage(number){
        await this.page.waitForTimeout(2000)
        await this.page.locator(this.desktop).click()
        await this.page.locator(this.mac).click()
        await this.page.waitForSelector(this.product)
        await this.page.locator(this.product).click()
        await this.page.locator(this.quantity).clear()
        await this.page.locator(this.quantity).fill(number)
        await this.page.locator(this.checknbox).click()
        await this.page.locator(this.addToCart).click()
        await this.page.locator(this.closeProduct).click()
    }
}
