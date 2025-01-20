import express from 'express';
import { getDashboardData } from '../controllers/dashboardController.mjs';
import { validateDashboardParams } from '../middleware/validationMiddleware.mjs';
import asyncHandler from '../middleware/asyncHandler.mjs';

const router = express.Router();

// Define dashboard route with validation and async error handling
router.get('/', validateDashboardParams, asyncHandler(getDashboardData));

export default router;
