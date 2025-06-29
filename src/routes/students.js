import express from 'express';
import Student from '../models/Student.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).end();
});
// POST /api/students/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email, password }); // Use hashed passwords in production!
  if (!student) return res.status(401).json({ error: 'Invalid credentials' });
  res.json(student);
});

export default router;