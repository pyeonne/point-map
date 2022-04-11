import express from 'express';
import * as pinController from '../controller/pin.js';

const router = express.Router();

// GET /pins
router.get('/', pinController.getPins);

// POST /pins
router.post('/', pinController.createPin);

export default router;
