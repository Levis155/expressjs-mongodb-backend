import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee, addMultipleEmployees, updateEmployee, deleteEmployee, deleteAllEmployees, deleteRetiredEmployees } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees).post(addSingleEmployee);
router.route("/bulk").post(addMultipleEmployees);
router.route("/all").delete(deleteAllEmployees);
router.route("/retired").delete(deleteRetiredEmployees)
router.route("/:id").patch(updateEmployee).delete(deleteEmployee);

export default router;