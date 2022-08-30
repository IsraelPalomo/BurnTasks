import { Router } from 'express';
import Task from '../models/Taks';

const router = Router();

router.get('/', async (req, res) => {
  res.send('Get tasks');
});

export default router;
