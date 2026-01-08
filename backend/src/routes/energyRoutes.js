import express from 'express';
import { getEnergyData } from '../controllers/energyControllers.js';
const router = express.Router();
router.get('/', getEnergyData);
export default router;