import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure logs directory exists
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Define logger
const logFile = path.join(logsDir, 'server.log');

export const logger = {
  log: (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // Append log to file
    fs.appendFileSync(logFile, logMessage, { encoding: 'utf8' });
  },
};
