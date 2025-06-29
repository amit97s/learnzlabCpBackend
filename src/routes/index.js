import express from 'express';
import { IndexController } from '../controllers/index.js';
import studentsRouter from './students.js'; 
import Student from '../models/Student.js'; 
const router = express.Router();
const indexController = new IndexController();
const setRoutes = (app) => {
    router.get('/', indexController.getIndex.bind(indexController));
    app.use('/', router);
    app.use('/api/students', studentsRouter)
    app.post('/api/students/login', async (req, res) => {
        const { email, password } = req.body;
        const student = await Student.findOne({ email, password });
        if (!student) return res.status(401).json({ error: 'Invalid credentials' });
        res.json(student);
    });
};

export default setRoutes;