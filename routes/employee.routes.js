import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee, addMultipleEmployees, updateEmployee, deleteEmployee, deleteAllEmployees } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees).post(addSingleEmployee);
router.route("/bulk").post(addMultipleEmployees);
router.route("/all").delete(deleteAllEmployees);
router.route("/:id").patch(updateEmployee).delete();

export default router;