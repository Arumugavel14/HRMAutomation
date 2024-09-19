class HrmClaim {
    constructor(page) {
        this.page = page
        this.ClaimModule = "(//span[normalize-space()='Claim'])[1]"
        this.CSubmitClaim = "//a[text()='Submit Claim']"
        this.CEventDb = "(//div[text()='-- Select --'])[1]"
        this.CCurrency = "(//div[@class='oxd-select-text--after'])[2]"
        this.EveValue = "(//div[@role='option'])[2]"
        this.CurrValue = "//span[text()='Indian Rupee']"
        this.CTextArea = "//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']"
        this.CCreateBtn = "//button[normalize-space()='Create']"
        this.CAddBtn = "(//button[@class='oxd-button oxd-button--medium oxd-button--text'])[1]"
        this.CExpType = "//div[@class='oxd-select-text oxd-select-text--active']"
        this.CExpVal = "//span[normalize-space()='Transport']"
        this.CCalendar = "//input[@placeholder='yyyy-dd-mm']"
        this.CAmt = "//i[@class='oxd-icon bi-calendar oxd-date-input-icon']/following::input[1]"
        this.CNote = "(//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical'])[2]"
        this.CSaveBtn = "//button[normalize-space()='Save']"
        this.CAttachBtn = "(//button[text()=' Add '])[2]"
        this.CABrowseBtn = "//div[@class='oxd-file-button']"
        this.CACmtfield = "//textarea[@placeholder='Type comment here']"
        this.CAsaveBtn = "//button[normalize-space()='Save']"
        //this.fileInput = page.locator('input[type="file"]');
        this.CAttachBtn = "(//button[text()=' Add '])[2]"
        this.CABrowseBtn = "//div[@class='oxd-file-div oxd-file-div--active']"
        this.CACmtfield = "//textarea[@placeholder='Type comment here']"
        this.CAsaveBtn = "//button[normalize-space()='Save']"
        this.CACancelBtn="//button[@class='oxd-button oxd-button--medium oxd-button--ghost']"
        this.ClaimSubmit="//button[normalize-space()='Submit']"
    }

    async ClaimProcess() {
        await this.page.click(this.ClaimModule)
        await this.page.click(this.CSubmitClaim)
        await this.page.click(this.CEventDb)
        await this.page.click(this.EveValue)
        await this.page.click(this.CCurrency)
        await this.page.click(this.CurrValue)
        await this.page.fill(this.CTextArea, 'Hong Kong Business Trip')
        await this.page.click(this.CCreateBtn)
        await this.page.click(this.CAddBtn)
        await this.page.click(this.CExpType)
        await this.page.click(this.CExpVal)
        await this.page.fill(this.CCalendar, '2024-10-09')
        await this.page.fill(this.CAmt, '4000')
        await this.page.fill(this.CNote, "Travelled from Gujarat to Surat using Rented car, Car Fuel and rent cost")
        await this.page.click(this.CSaveBtn)
    }
    async AttachFileUpload() {
        await this.page.click(this.CAttachBtn)
        await this.page.fill(this.CACmtfield,'This is the File which contains the Bills')
        await this.page.click(this.CACancelBtn)
        //await this.page.click(this.CABrowseBtn); 
        //await fileInput.setInputFiles('C:/Users/GOWTHAM K/Downloads/blank.pdf');
        await this.page.click(this.ClaimSubmit)

    }
}
module.exports = HrmClaim