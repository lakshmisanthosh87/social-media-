import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth",authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("API running...");
});


connectDB ()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});