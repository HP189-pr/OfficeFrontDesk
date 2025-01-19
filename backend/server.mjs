import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dashboardRoutes from './routes/dashboardRoutes.mjs'; // Import routes
import { errorHandler } from './middleware/errorHandler.mjs';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Set default port from .env or fallback to 5000
const PORT = process.env.PORT || 5001;

// Middleware
// Enable CORS for specific origins (adjust for production)
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));

// Parse incoming JSON payloads
app.use(express.json());

// Routes
// Mount dashboard-related routes under `/dashboard`
app.use('/dashboard', dashboardRoutes);

// Root route to confirm backend is running
app.get('/', (req, res) => {
  res.status(200).send('Backend is running with ES Modules!');
});

// Global error handler (handles errors across all routes)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
