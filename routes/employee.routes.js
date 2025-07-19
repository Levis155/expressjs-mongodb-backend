import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee, addMultipleEmployees } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees);
router.route("/add-single").post(addSingleEmployee);
router.route("/add-multiple").post(addMultipleEmployees);

export default router;