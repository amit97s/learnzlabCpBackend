import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import setRoutes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

dotenv.config();

// app.use(cors({
//   origin: "*", // sabko allow kar diya, test ke liye
//   credentials: true
// }));

app.use(cors())
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected successfully');
        setRoutes(app);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.get('/health', (req, res) => {
  res.send('OK');
});

// ok got it not git push this shit 