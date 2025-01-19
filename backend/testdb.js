import { testDatabaseConnection } from './models/databaseTestModule.js';

// Database configuration
const dbConfig = {
  host: process.env.DATABASE_HOST || 'postgres',
  port: process.env.DATABASE_PORT || 5432,
  database: process.env.DATABASE_NAME || 'FrontDesk',
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'Ksv@svkm2007',
};

// Call the function to test the connection
testDatabaseConnection(dbConfig);
