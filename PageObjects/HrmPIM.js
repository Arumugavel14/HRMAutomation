class HrmPIM{

    constructor(page){
        this.page=page
        this.EmployeeList="//a[text()='Employee List']"
        this.AddEmployee="//a[text()='Add Employee']"
    }

    async AddEmployeeNew(){
        await this.page.click(this.AddEmployee)
    }
}
module.exports=HrmPIM