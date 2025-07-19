import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;