import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dashboardRoutes from './routes/dashboardRoutes.mjs'; // Dashboard routes
import { errorHandler } from './middleware/errorHandler.mjs'; // Global error handler
import { connectDB } from './db.mjs'; // Database connection

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Port configuration
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());

// Test database connection
connectDB();

// Routes
app.use('/api/v1/dashboard', dashboardRoutes);

// Health check route
app.get('/', (req, res) => {
  res.status(200).send('Backend is running with ES Modules!');
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
