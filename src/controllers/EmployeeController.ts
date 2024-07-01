import express, { request } from "express";
import { EmployeeModel } from "../db/employee";

class EmployeeController{
    getAllEmployee= async(request: express.Request, response: express.Response)=>{
        try{
            const employees = await EmployeeModel.find();
            return response.status(200).json({data:employees})
        }catch(error){
            return response.sendStatus(400);

        }
    }

    getEmployee= async(request: express.Request, response: express.Response)=>{
        try{
            const {id} = request.params;
            const employees = await EmployeeModel.findById(id);
            return response.status(200).json({data:employees})
        }catch(error){
            return response.sendStatus(400);

        }
    }

      createEmployee= async(request: express.Request, response: express.Response)=>{
        try{
            const {name, email, mobile, dob, doj } = request.body;
            const employees = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });
            await employees.save();
            return response.status(201).json({message: "Employee Created",data:employees})
        }catch(error){
            return response.sendStatus(400);

        }
    }

    updateEmployee= async(request: express.Request, response: express.Response)=>{
        try{
            const {id} = request.params;
            const {name, email, mobile, dob, doj } = request.body;
            const employees = await EmployeeModel.findById(id);
            if(employees){
                employees.name=name;
                employees.email=email;
                employees.mobile=mobile;
                employees.dob=dob;
                employees.doj=doj;
                await employees.save();
                return response.status(200).json({message: "Employee Updated",data:employees})
            }
            return response.sendStatus(400);      
        }catch(error){
            return response.sendStatus(400);

        }
    }

    
    deleteEmployee= async(request: express.Request, response: express.Response)=>{
        try{
            const {id} = request.params;
            await EmployeeModel.findByIdAndDelete({_id: id});
            return response.status(200).json({message: "Employee Deleted"})
        }catch(error){
            return response.sendStatus(400);

        }
    }
}

export default new EmployeeController();