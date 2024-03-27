import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import * as mongoose from "mongoose";
import EmployeeController from "./controllers/employee.controller";

dotenv.config();


const { DATABASE_URL, PORT } = process.env;

const app: Express = express();
const port = PORT || 3000;

// enable cors
app.use(cors());
app.options('*', cors());

// parse json request body
app.use(express.json());

mongoose.connect(DATABASE_URL as string);

const employeeController = new EmployeeController()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Backend service working',
    });
});

app.post('/add_employee',employeeController.addEmployee)

app.post('/get_employee_byFilter',employeeController.getEmployee)

app.get('/get_employee' , employeeController.getEmployeeById)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});