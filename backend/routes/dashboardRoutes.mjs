import express from 'express';
import { getDashboardData } from '../controllers/dashboardController.mjs';
import { validateDashboardRequest } from '../middleware/validationMiddleware.mjs';

const router = express.Router();

router.get('/dashboard', validateDashboardRequest, getDashboardData);

export default router;
