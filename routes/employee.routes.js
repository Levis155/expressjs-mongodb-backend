import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee, addMultipleEmployees } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees);
router.route("/").post(addSingleEmployee);
router.route("/bulk").post(addMultipleEmployees);

export default router;