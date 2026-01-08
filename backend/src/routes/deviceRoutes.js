import express from 'express';
import { createDevice, deleteDevice, getDevice, updateDevice } from '../controllers/deviceControllers.js';
const router = express.Router();
router.get('/',getDevice);
router.post('/',createDevice);
router.put('/:id',updateDevice);
router.delete('/:id',deleteDevice);
export default router;