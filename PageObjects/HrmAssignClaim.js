class HrmAssignClaim{
    constructor(page){
        this.page=page
        this.AssignClaimLable="//a[normalize-space()='Assign Claim']"
        this.AssignEmpNameField="//input[@placeholder='Type for hints...']"
        this.AssignEmpName="//span[normalize-space()='Ravi M B']"
        this.AssignEvent = "(//div[text()='-- Select --'])[1]"
        this.AssignEventVal="//span[normalize-space()='Accommodation']"
        this.AssignCurrency="(//div[@class='oxd-select-text--after'])[2]"
        this.AssignCurrencyVal="//span[text()='Indian Rupee']"
        this.AssignRemark = "//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']"
        this.AssignCreateBtn = "//button[normalize-space()='Create']"
        this.AssignExpenseAddBtn="(//button[@class='oxd-button oxd-button--medium oxd-button--text'])[1]"
        this.AssignExpensesTypeDd="//div[@class='oxd-select-text oxd-select-text--active']"
        this.AssignExpVal = "//span[normalize-space()='Transport']"
        this.AssignCalendar="(//input[@placeholder='yyyy-dd-mm'])[1]"
        this.AssignAmt = "//i[@class='oxd-icon bi-calendar oxd-date-input-icon']/following::input[1]"
        this.AssignNote = "(//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical'])[2]"
        this.AssignSaveBtn="//button[normalize-space()='Save']"

    }

    async AssignClaim(){
        await this.page.click(this.AssignClaimLable)
        await this.page.fill(this.AssignEmpNameField,'Ravi')
        await this.page.click(this.AssignEmpName)
        await this.page.click(this.AssignEvent)
        await this.page.click(this.AssignEventVal)
        await this.page.click(this.AssignCurrency)
        await this.page.click(this.AssignCurrencyVal)
        await this.page.click(this.AssignRemark,'This Assign is submitted for the Foreign Business trip')
        await this.page.click(this.AssignCreateBtn)
        await this.page.click(this.AssignExpenseAddBtn)
        await this.page.click(this.AssignExpensesTypeDd)
        await this.page.click(this.AssignExpVal)
        await this.page.fill(this.AssignCalendar,'2024-09-13')
        await this.page.fill(this.AssignAmt,'5000')
        await this.page.fill(this.AssignNote,'This is the Bill of the last month team outing')
        await this.page.click(this.AssignSaveBtn)


    }
}
module.exports=HrmAssignClaim