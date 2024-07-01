import express from "express";
import EmployeeController from "../controllers/EmployeeController";

const router = express.Router();

router.get("/employee", EmployeeController.getAllEmployee);
router.get("/employee/:id", EmployeeController.getEmployee);
router.post("/employee", EmployeeController.createEmployee);
router.put("/employee/:id", EmployeeController.updateEmployee);
router.delete("/emplyee/:id", EmployeeController.deleteEmployee);

export default router;