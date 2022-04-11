import express from 'express';
import * as authController from '../controller/auth.js';

const router = express.Router();

// POST /auth/signup
router.post('/signup', authController.signup);

// POST /auth/login
router.post('/login', authController.login);

export default router;
