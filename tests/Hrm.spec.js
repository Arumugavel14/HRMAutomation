const { test, expect } = require('@playwright/test');
const HrmLogin = require('../PageObjects/HrmLogin');
const HrmHome = require('../PageObjects/HrmHome');
const HrmTime = require('../PageObjects/HrmTime');
const HrmDashboard = require('../PageObjects/HrmDashboard');
const HrmClaim = require('../PageObjects/HrmClaim');
const HrmAssignClaim = require('../PageObjects/HrmAssignClaim')
const HrmRecruitVacancy =  require('../PageObjects/HrmRecruitVacancy')
const HrmRecruitCandidate =  require('../PageObjects/HrmRecruitCandidate')
const HrmPIM= require('../PageObjects/HrmPIM')
const HrmAddEmployee = require('../PageObjects/HrmAddEmployee')

test('HrmApplication', async ({ browser }) => {
    test.setTimeout(120000)
    const page = await browser.newPage();
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const HrmLoginApp = new HrmLogin(page);
    const HrmHomeApp = new HrmHome(page);
    const HrmTimeApp = new HrmTime(page);
    const HrmDashApp = new HrmDashboard(page)
    const HrmClaimApp =new HrmClaim(page)
    const HrmAsgnClaim = new HrmAssignClaim(page)
    const HrmRecruitVacancyApp = new HrmRecruitVacancy(page)
    const HrmCandidate = new HrmRecruitCandidate(page)
    const HrmPIMApp = new HrmPIM(page)
    const HrmAddEmp =  new HrmAddEmployee(page)
    
    await HrmLoginApp.LoginToDash();
    //await HrmHomeApp.PunchTimeIn();
    //await HrmTimeApp.PunchIn();           // Punch In function
    //await HrmTimeApp.MyTimesheet();        // Filling the Timesheet
    //await HrmClaimApp.ClaimProcess()
    //await HrmClaimApp.AttachFileUpload()
    //await HrmAsgnClaim.AssignClaim()
    //await HrmDashApp.DashRecruit()
    //await HrmRecruitVacancyApp.HrmRecruitVacancy()
    //await HrmCandidate.HrmRecruitCandidate()
    //await HrmCandidate.HrmRecruitShortlist()
    await HrmDashApp.DashPIM()
    await HrmPIMApp.AddEmployeeNew()
    await HrmAddEmp.AddEmp()
    await HrmAddEmp.ContactDetails()
    await HrmAddEmp.EmergencyCon()
    await HrmDashApp.HrmLogout()
   
    await page.waitForTimeout(2500);
});
