import { Router } from 'express';
import Task from '../models/Taks';

const router = Router();

router.get('/task', async (req, res) => {
  const task = await Task.find();
  res.send(task);
});

router.post('/task', async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  res.json(task);
});

router.get('/task/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
