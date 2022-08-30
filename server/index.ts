import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import taksRoutes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', taksRoutes);

export default app;
