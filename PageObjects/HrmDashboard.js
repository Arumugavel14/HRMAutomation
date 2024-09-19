class HrmDashboard{
    constructor(page){
        this.page=page
        this.userDd="//p[@class='oxd-userdropdown-name']"
        this.usLogout="//a[text()='Logout']"
        this.RecruitmentModule="//span[text()='Recruitment']"
        this.PIM="//span[text()='PIM']"
        

    }

    async HrmLogout(){
        await this.page.click(this.userDd)
        await this.page.click(this.usLogout)

    }
    async DashRecruit(){
        await this.page.click(this.RecruitmentModule)
    }
    async DashPIM(){
        await this.page.click(this.PIM)
    }
}
module.exports=HrmDashboard