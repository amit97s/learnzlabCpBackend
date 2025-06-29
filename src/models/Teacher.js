const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  number: String,
  email: String,
  password: String,
  address: String,
  subject: String,
  assignedDate: String,
  status: { type: String, default: "Active" },
});

module.exports = mongoose.model("Teacher", teacherSchema);