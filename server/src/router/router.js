import express from 'express';
import { addFormData, getData } from '../controller/controller.js';

const router=express.Router();

router.post('/ratings',addFormData);
router.get('/ratings/:page',getData);

export default router;