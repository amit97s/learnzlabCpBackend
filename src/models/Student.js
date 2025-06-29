import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  email: String,
  password: String,
  address: String,
  enrolledDate: String,
  status: String
});

const Student = mongoose.model('Student', studentSchema);
export default Student;