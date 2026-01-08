import express from 'express';
import { createRoom, deleteRoom, getRoom, updateRoom } from '../controllers/roomControllers';
const router = express.Router();
router.get('/', getRoom);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);
export default router;