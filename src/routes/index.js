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
};

export default setRoutes;