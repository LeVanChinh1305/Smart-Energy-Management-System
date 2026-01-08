import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/userControllers.js';
const router = express.Router();
router.get('/', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/', createUser);
export default router;
