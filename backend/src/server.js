import express from 'express';
import energyRoutes from './routes/energyRoutes.js';
import { connectDB } from './config/data.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
connectDB();
app.use("/trangchu", energyRoutes); 
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

