import { Router } from "express";
import { fetchAllEmployees } from "../controllers/employee.controllers.js";

const router = Router();

router.route("/").get(fetchAllEmployees)

export default router;