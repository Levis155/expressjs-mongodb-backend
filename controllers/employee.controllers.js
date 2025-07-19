import Employee from "../models/employee.model.js";

export const fetchAllEmployees = async (req, res) => {
    try{
        const allEmployees = await Employee.find();

        res.status(200).json({data: allEmployees})
    } catch (err) {
        res.status(500).json({message: "Something went wrong"})
    }
}