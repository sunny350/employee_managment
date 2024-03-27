import { NextFunction, Request, Response } from "express";
import DatabaseService from "../services/database.service";
class EmployeeController{
    public databaseService = new DatabaseService();

    public addEmployee = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const {first_name , last_name ,employee_id,salary,department} = req.body
            const record = await this.databaseService.addData({first_name , last_name ,employee_id,salary,department})
            res.status(200).json({success : true , data : {employee_id : record.employee_id , name : record.first_name + " " + record.last_name }})
            
        } catch (error) {
            console.error("Error removing trade:", error);
            res.status(500).json({success : false , message : 'Internal server error'})
        }
    }

    public getEmployee = async(req: Request, res: Response, next: NextFunction) =>{
        try {
            const {filter} = req.body
            const rec = await this.databaseService.getData(filter)
            res.status(200).json({success : true , data : rec})
        } catch (error) {
            console.error("Error removing trade:", error);
            res.status(500).json({success : false , message : 'Internal server error'})
        }
    }

    public getEmployeeById = async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const employeeId = req.query.id
            if(!employeeId) throw new Error('invalid id')
            let rec = await this.databaseService.getEmployeeById(employeeId)
            res.status(200).json({success : true , data : rec})
        } catch (error) {
            console.error("Error removing trade:", error);
            res.status(500).json({success : false , message : 'Internal server error'})
        }
    }
}

export default EmployeeController;
