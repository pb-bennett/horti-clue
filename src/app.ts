import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import logger from './utils/logger';

import userRoutes from './routes/userRoutes';
import plantRoutes from './routes/plantRoutes';

dotenv.config();
const app = express();
const port: string = process.env.PORT || '3000';

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/plants', plantRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
