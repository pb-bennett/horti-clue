import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app';
import logger from './utils/logger';

dotenv.config();
const port: string = process.env.PORT || '3000';

if (!process.env.DB_URI) {
  console.error('Error: DB_URI is not defined in environment variables.');
  process.exit(1);
}
if (!process.env.DB_PW) {
  console.error('Error: DB_PW is not defined in environment variables.');
  process.exit(1);
}

const dbUri: string = process.env.DB_URI.replace('<PASSWORD>', process.env.DB_PW);
console.log('Connecting to database...');
mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to database successfully');
    console.log(`Starting server on port ${port}...`);
    app.listen(port, () => console.log(`Server started, listening on port ${port}`));
  })
  .catch((error) => {
    console.error('Connection to database failed', error);
    throw error;
  });

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1); // Optional: exit the process if needed
});

process.on('uncaughtException', (error: Error) => {
  logger.error(`Uncaught Exception: ${error.message}`);
  process.exit(1); // Optional: exit the process if needed
});
