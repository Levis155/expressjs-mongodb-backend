import { Router } from "express";
import { fetchAllEmployees, addSingleEmployee } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees);
router.route("/add-single").post(addSingleEmployee);

export default router;