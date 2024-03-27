import { EmployeeModel } from "../models/employee.model";
class DatabaseService {
  public employeeModel = EmployeeModel;

  public async addData(doc:any) {
    return await this.employeeModel.findOneAndUpdate(
      {
        employee_id: doc.employee_id,
      },
      doc,
      { upsert: true, new: true }
    );
  }

  public async getData(filter:any) {
    if(filter.department && filter.salary){
        return await this.employeeModel.find({department : filter.department}).sort({salary:filter.salary})
    }
    else if(filter.salary){
        return await this.employeeModel.find({}).sort({salary : filter.salary})
    }
    else if(filter.department){
        return await this.employeeModel.find({department : filter.department})
    }
    else{
      return await this.employeeModel.find({}).sort({employee_id : 1})
    }
  }

  public async getEmployeeById(employeeId:any){
    return await this.employeeModel.find({employee_id : Number(employeeId)})
  }
}

export default DatabaseService;
