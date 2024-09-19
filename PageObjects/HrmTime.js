class HrmTime{
    constructor(page){
        this.page=page
        this.datefield="//input[@placeholder='yyyy-dd-mm']"
        this.time="//input[@placeholder='hh:mm']"
        this.note="//textarea[@placeholder='Type here']"
        this.inBtn="//button[text()=' In ']"
        this.timeSheetDd="//span[text()='Timesheets ']"
        this.tsDdvalue="//a[text()='My Timesheets']"
        this.tseditbtn="//button[text()=' Edit ']"
        this.tsDdWork="//div[@class='oxd-select-text oxd-select-text--active']"
        this.timeDdvalue="//span[text()='Bug Fixes']"
        this.tsDbox="(//input[@class='oxd-input oxd-input--active'])[4]"
        this.chatBtn="(//button[@type='button'])[6]"
        this.cmtTextArea="//textarea[@placeholder='Comment here']"
        this.cmtSaveBtn="(//button[text()=' Save '])[2]"
        this.tsxClose="//button[text()='×']"
        this.tsSaveBtn="//button[normalize-space()='Save']"
    }

    async PunchIn(){
        //await this.page.fill(this.datefield, 11-9-2024)
        await this.page.fill(this.time,'09:05 AM')
        await this.page.fill(this.note,"I'm Late due to traffic")
        await this.page.click(this.inBtn)
    }
    async MyTimesheet(){
        await this.page.click(this.timeSheetDd)
        await this.page.click(this.tsDdvalue)
        await this.page.click(this.tseditbtn)
        await this.page.click(this.tsDdWork)
        await this.page.click(this.timeDdvalue)
        await this.page.click(this.tsDbox)
        await this.page.click(this.chatBtn)
        await this.page.fill(this.cmtTextArea,"Fixed 6 critical Bugs in main module")
        await this.page.click(this.cmtSaveBtn)
        await this.page.click(this.tsxClose)
        await this.page.click(this.tsSaveBtn)

    }
}
module.exports= HrmTime