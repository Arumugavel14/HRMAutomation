const { time } = require("console")

class HrmRecruitCandidate{
    constructor(page){
        this.page=page
        this.Candidate="//a[normalize-space()='Candidates']"
        this.AddBtn="//button[text()=' Add ']"
        this.FirstName="//input[@placeholder='First Name']"
        this.LastName="//input[@placeholder='Last Name']"
        this.Vacancy="//div[@class='oxd-select-text oxd-select-text--active']"
        this.VacancyVal="//span[text()='Software Engineer']"
        this.Email="//div[@class='oxd-select-text oxd-select-text--active']/following::input[1]"
        this.ContactNo="//div[@class='oxd-select-text oxd-select-text--active']/following::input[2]"
        this.Keywords="//input[@placeholder='Enter comma seperated words...']"
        this.DateApplication="//input[@placeholder='yyyy-dd-mm']"
        this.RadioBtn="//div[@class='oxd-checkbox-wrapper']//label"
        this.SaveBtn="//button[normalize-space()='Save']"
        this.Shortlistbtn="//button[normalize-space()='Shortlist']"
        this.Reject="//button[normalize-space()='Reject']"
        this.ScheduleBtn="//button[normalize-space()='Schedule Interview']"
        this.InterviewTlt="//label[text()='Interview Title']/following::input[1]"
        this.Interviewer="//input[@placeholder='Type for hints...']"
        this.InterviewVal="//span[text()='Diana  Edwards']"
        this.Date="//input[@placeholder='Type for hints...']"
        this.Time="//input[@placeholder='hh:mm']"


    }

    async HrmRecruitCandidate(){
        await this.page.click(this.Candidate)
        await this.page.click(this.AddBtn)
        await this.page.fill(this.FirstName,'Joe')
        await this.page.fill(this.LastName, 'Thevadas')
        await this.page.click(this.Vacancy)
        await this.page.click(this.VacancyVal)
        await this.page.fill(this.Email,'Joe@example.com')
        await this.page.fill(this.ContactNo,'9952104322')
        await this.page.fill(this.Keywords,"Manual Testing, Selenium, API Testing, Java")
        await this.page.fill(this.DateApplication, '2024-13-09')
        await this.page.click(this.RadioBtn)
        await this.page.click(this.SaveBtn)} 
    async HrmRecruitShortlist(){
        await this.page.click(this.Shortlistbtn)
        await this.page.click(this.SaveBtn)
        await this.page.click(this.ScheduleBtn)
        await this.page.fill(this.InterviewTlt,'SDET Interview Schedule')
        await this.page.click(this.Interviewer)
        await this.page.click(this.InterviewVal)
        await this.page.fill(this.Date,'2024-20-09')
        await this.page.fill(this.Time,'03:00 PM')
        await this.page.fill(this.SaveBtn)
    }
}
module.exports=HrmRecruitCandidate