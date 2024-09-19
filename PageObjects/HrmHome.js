class HrmHome{
    constructor(page){
        this.page=page
        this.userBtn='.oxd-userdropdown-tab'
        this.SearchBar="//input[@placeholder='Search']"
        this.AdminM="(//span[contains(.,'Admin')])[1]"
        this.PIMM="(//span[contains(.,'PIM')])[1]"
        this.LeaveM="(//span[contains(.,'Leave')])[1]"
        this.TimeM="(//span[contains(.,'Time')])[1]"
        this.RecruitmentM="(//span[contains(.,'Recruitment')])[1]"
        this.MyinfoM="(//span[contains(.,'My Info')])[1]"
        this.dashboardM="(//span[contains(.,'Dashboard')])[1]"
        this.StopwatchIcon="//i[@class='oxd-icon bi-stopwatch']"
    }
    async PunchTimeIn(){
        await this.page.click(this.StopwatchIcon)
    }
   
}
module.exports=HrmHome
