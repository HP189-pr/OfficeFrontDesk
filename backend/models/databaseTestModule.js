import { connectDB, sequelize } from '../db.mjs';
/**
 * Test the database connection and query the current time using Sequelize.
 */
export const testDatabaseConnection = async () => {
  try {
    // Connect to the database using the existing connectDB function
    await connectDB();
    console.log('Connected to the database successfully!');
    // Run a query to fetch the current time
    const [result] = await sequelize.query('SELECT NOW();');
    console.log('Database Time:', result[0]);
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
  } finally {
    // Optionally close the connection if not managed by Sequelize lifecycle
    await sequelize.close();
    console.log('Database connection closed.');
  }
};
