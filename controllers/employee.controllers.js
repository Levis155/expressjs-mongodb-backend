import Employee from "../models/employee.model.js";

export const fetchAllEmployees = async (req, res) => {
    try{
        const allEmployees = await Employee.find();

        res.status(200).json({data: allEmployees})
    } catch (err) {
        res.status(500).json({message: "Failed to fetch employees."})
    }
}

export const addSingleEmployee = async (req, res) => {
    try{
        const {empName, age, location, email} = req.body;

        const newEmployee = await Employee.create({empName, age, location, email});

        res.status(201).json({data: newEmployee});
    } catch (err) {
        res.status(500).json({message: "Failed to add employee"})
    }
}

export const addMultipleEmployees = async (req, res) => {
  try {
    const employees = req.body;

    const createdEmployees = await Employee.create(employees); 

    res.status(201).json({ data: createdEmployees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add employees" });
  }
};
