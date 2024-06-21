import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import logger from './utils/logger';

dotenv.config();
const app = express();
const port: string = process.env.PORT || '3000';

app.get('/', (req: Request, res: Response) => {
  logger.info('Handling GET / request');
  logger.error('Error handling GET / request');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
