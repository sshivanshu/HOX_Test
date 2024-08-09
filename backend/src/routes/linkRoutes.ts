// src/routes/linkRoutes.ts
import { Router } from 'express';
import {
    createlink, 
    updatelink, 
    getalllinks, 
    getlink 
} from '../controller/user.controller';

const router = Router();

router.post('/links', createlink);
router.get('/links', getalllinks);
router.get('/links/:id', getlink);
router.put('/links/:id', updatelink);

export default router;

