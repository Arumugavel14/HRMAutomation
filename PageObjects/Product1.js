exports.Product1 = class Product1{
    constructor(page){
        this.page=page
        this.Phone="//a[normalize-space()='Phones & PDAs']"
        //this.AllDesk="//a[normalize-space()='Show All Desktops']"
        this.Mac="//a[contains(text(),'Palm Treo Pro')]"
        //this.RadioB="//label[contains(text(),'Small')]"
        this.addToCart="//button[contains(text(),'Add to Cart')]"
        this.viewCart="//strong[normalize-space()='View Cart']"
        this.ContineShop="//a[normalize-space()='Continue Shopping']"
    }
    async Product1(){
        await this.page.waitForSelector(this.Phone)
        await this.page.click(this.Phone)
        //await this.page.click(this.AllDesk)
        await this.page.waitForSelector(this.Mac)
        await this.page.click(this.Mac)
        //await this.page.click(this.RadioB)
        //await this.page.waitForTimeout(2000)
        await this.page.waitForSelector(this.addToCart)
        await this.page.click(this.addToCart)
        await this.page.waitForSelector(this.viewCart)
        await this.page.click(this.viewCart)
        await this.page.waitForSelector(this.ContineShop)
        await this.page.click(this.ContineShop)
    }
}