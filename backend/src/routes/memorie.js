import express from 'express';
import { memorie } from '../controllers/memorie.js';

const router = express.Router();

router.get('/', memorie);

export default router;
