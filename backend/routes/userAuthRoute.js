// backend/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../Auth/userAuth.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  await registerUser(username, email, password);
  res.status(201).send('User registered successfully');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const token = await loginUser(username, password);
  res.json({ token });
});

export default router;
