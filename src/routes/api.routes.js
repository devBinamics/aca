import { Router } from 'express';
import { getExampleData } from '../controllers/data.controller.js';

const router = Router();

router.get('/data', getExampleData);

export default router;