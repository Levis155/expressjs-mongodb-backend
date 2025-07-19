import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import employeeRouter from "./routes/employee.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use("/employee", employeeRouter);


export default app;