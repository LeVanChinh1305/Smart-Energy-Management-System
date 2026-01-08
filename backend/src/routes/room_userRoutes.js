import express from 'express';
import { createRoom_user, deleteRoom_user, getRoom_user, updateRoom_user } from '../controllers/room_userControllers';
const router = express.Router();
router.get('/', getRoom_user);
router.post('/', createRoom_user);
router.put('/:id', updateRoom_user);
router.delete('/:id', deleteRoom_user);
export default router;
