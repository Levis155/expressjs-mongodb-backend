import Employee from "../models/employee.model.js";

export const addSingleEmployee = async (req, res) => {
  try {
    const { empName, age, location, email } = req.body;

    const newEmployee = await Employee.create({
      empName,
      age,
      location,
      email,
    });

    res.status(201).json({ data: newEmployee });
  } catch (err) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};

export const fetchAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find();

    res.status(200).json({ data: allEmployees });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees." });
  }
};

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

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedFields, { new: true, runValidators: true });

    res.status(200).json({ data: updatedEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update employee" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    await Employee.findByIdAndDelete(id);

    res.status(200).json({ message: "Employee deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

export const deleteAllEmployees = async (req, res) => {
  try {
    await Employee.deleteMany({});

    res.status(200).json({
      message: "All employees deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete employees" });
  }
};

