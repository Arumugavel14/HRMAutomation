class AddEmployee{
    constructor(page){
        this.page=page
        this.EmpFirstName="//input[@placeholder='First Name']"
        this.EmpLastName="//input[@placeholder='Last Name']"
        this.SaveBtn="//button[normalize-space()='Save']"
        this.DrivingLicense="//label[text()=\"Driver's License Number\"]/following::input[1]"
        this.LicenseExpiry="//label[text()=\"Driver's License Number\"]/following::input[2]"
        this.Nationality="//label[normalize-space()='Nationality']/following::div[1]"
        this.NationalityVal="//span[text()='Indian']"
        this.MaritalStatus="//label[normalize-space()='Marital Status']/following::div[3]"
        this.MaritalVal="//span[normalize-space()='Single']"
        this.DateBirth="//label[normalize-space()='Date of Birth']/following::input[1]"
        this.Gender="//label[normalize-space()='Male']"
        this.PerSaveBtn="//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//button[@type='submit'][normalize-space()='Save']"
        this.ContactDetailsLab="//a[normalize-space()='Contact Details']"
        this.Street1="//label[normalize-space()='Street 1']/following::input[1]"
        this.city="//label[normalize-space()='City']/following::input[1]"
        this.State="//label[normalize-space()='State/Province']/following::input[1]"
        this.zip="//label[normalize-space()='State/Province']/following::input[2]"
        this.country="//div[@class='oxd-select-text oxd-select-text--active']"
        this.countryVal="//span[normalize-space()='India']"
        this.MobileNo="//label[normalize-space()='Mobile']/following::input[1]"
        this.WorkEmail="//label[normalize-space()='Work Email']/following::input[1]"
        this.EmergencyCont="//a[normalize-space()='Emergency Contacts']"
        this.AddContact="(//button[text()=' Add '])[1]"
        this.EmName="//label[normalize-space()='Name']/following::input[1]"
        this.EmRelation="//label[normalize-space()='Relationship']/following::input[1]"
        this.EmMobile="//label[normalize-space()='Mobile']/following::input[1]"


    }
    async AddEmp(){
        await this.page.fill(this.EmpFirstName,'Rahul')
        await this.page.fill(this.EmpLastName,'Ragav')
        await this.page.click(this.SaveBtn)
        await this.page.fill(this.DrivingLicense,'TN01 201814022000')
        await this.page.fill(this.LicenseExpiry,'2028-16-02')
        await this.page.click(this.Nationality)
        await this.page.click(this.NationalityVal)
        await this.page.click(this.MaritalStatus)
        await this.page.click(this.MaritalVal)
        await this.page.fill(this.DateBirth,'2000-14-02')
        await this.page.click(this.Gender)
        await this.page.click(this.PerSaveBtn)
    }
    async ContactDetails(){
        await this.page.click(this.ContactDetailsLab)
        await this.page.fill(this.Street1,'State Bank Colony, Mandakadu')
        await this.page.fill(this.city,'Kanyakumari')
        await this.page.fill(this.State,'Tamilnadu')
        await this.page.fill(this.zip,'637428')
        await this.page.click(this.country)
        await this.page.click(this.countryVal)
        await this.page.fill(this.MobileNo,'8675334567')
        await this.page.fill(this.WorkEmail,'workez@example.com')
        await this.page.click(this.SaveBtn)
    }
    async EmergencyCon(){
        await this.page.click(this.EmergencyCont)
        await this.page.click(this.AddContact)
        await this.page.fill(this.EmName,'Maddy')
        await this.page.fill(this.EmRelation,'Friend')
        await this.page.fill(this.EmMobile,'8677674498')
        await this.page.click(this.SaveBtn)

    }
}
module.exports=AddEmployee