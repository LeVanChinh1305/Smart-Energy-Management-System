import express from 'express';
import { createDefferent_value, deleteDefferent_value, getDefferent_value, updateDefferent_value } from '../controllers/defferent_valueControllers';
const router = express.Router();
router.get('/', getDefferent_value);
router.post('/', createDefferent_value);
router.put('/:id', updateDefferent_value);
router.delete('/:id', deleteDefferent_value);
export default router;