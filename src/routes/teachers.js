const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");

// Get all teachers
router.get("/", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

// Add a teacher
router.post("/", async (req, res) => {
  const teacher = new Teacher({ ...req.body, assignedDate: new Date().toLocaleDateString() });
  await teacher.save();
  res.json(teacher);
});

// Delete a teacher
router.delete("/:id", async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;