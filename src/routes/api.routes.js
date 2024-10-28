import { Router } from 'express';
import { getExampleData } from '../controllers/data.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.get('/data', authMiddleware, getExampleData);

export default router;