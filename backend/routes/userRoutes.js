import express from 'express';
import authMiddleware from '../middleware/authMiddleare.js';

const router = express.Router();

// Protected route for users
router.get('/home', authMiddleware('user'), (req, res) => {
  console.log('from the user role..........................');
  res.json({ message: 'User profile access granted', user: req.user });
});

export default router;
