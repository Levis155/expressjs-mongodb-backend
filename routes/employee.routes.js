import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee, addMultipleEmployees, updateEmployee } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees).post(addSingleEmployee);
router.route("/bulk").post(addMultipleEmployees);
router.route("/:id").patch(updateEmployee);

export default router;