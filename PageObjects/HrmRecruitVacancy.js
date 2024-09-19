class HrmRecruitVacancy{
    constructor(page){
        this.page=page
        this.RecruitVacancies="//a[text()='Vacancies']"
        this.VacanciesAddBtn="//button[text()=' Add ']"
        this.VacancyName="//label[normalize-space()='Vacancy Name']/following::input[1]"
        this.JobTitleDd="//div[@class='oxd-select-text oxd-select-text--active']"
        this.VacancyDescription="//textarea[@placeholder='Type description here']"
        this.HiringManager="//input[@placeholder='Type for hints...']"
        this.JobTitleValue="//span[text()='QA Engineer']"
        this.HiringValue="//span[text()='Elizabeth  Campbell']"
        this.NoOfPosition="//input[@placeholder='Type for hints...']/following::input[1]"
        this.VacancySaveBtn="//button[normalize-space()='Save']"
        this.VacancyCancelBtn="//button[normalize-space()='Cancel']"
        this.VacancyEditbtn="//div[text()='SDET']/following::div[text()='QA Engineer']/following::div[text()='Ranga Akunuri']/following::button[2]"


    }

    async HrmRecruitVacancy(){
        await this.page.click(this.RecruitVacancies)
        await this.page.click(this.VacanciesAddBtn)
        await this.page.fill(this.VacancyName, 'Software Engineering')
        await this.page.click(this.JobTitleDd)
        await this.page.click(this.JobTitleValue)
        await this.page.fill(this.VacancyDescription,"In the SDET role, your responsibilities will center on software development and testing. You will ensure the robustness of the company's automation initiatives before they can be distributed to internal and external clients.")
        await this.page.fill(this.HiringManager,'Elizabeth')
        await this.page.click(this.HiringValue)
        await this.page.fill(this.NoOfPosition,'4')
        await this.page.click(this.VacancySaveBtn)

    }
}
module.exports = HrmRecruitVacancy