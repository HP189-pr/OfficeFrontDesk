import { Sequelize } from 'sequelize';

// Environment Variables with Defaults
const DATABASE_NAME = process.env.DATABASE_NAME || 'FrontDesk';
const DATABASE_USER = process.env.DATABASE_USER || 'postgres';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'Ksvsvkm2007';
const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'; // Default to localhost
const DATABASE_PORT = parseInt(process.env.DATABASE_PORT || '5432', 10);

// Initialize Sequelize
const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'postgres',
    port: DATABASE_PORT,
    logging: false, // Set to console.log for debugging
    retry: {
      max: 5, // Retry up to 5 times
    },
  },
);

// Connect to Database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      'Connection to the database has been established successfully.',
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Exit the process in case of a connection failure
  }
};

// Sync Database
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error.message);
  }
};

// Exporting the Sequelize Instance and Functions
export { sequelize, connectDB, syncDB };
