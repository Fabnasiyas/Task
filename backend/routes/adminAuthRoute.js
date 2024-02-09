// backend/routes/authRoutes.js
import { Express } from 'express';
import{ registerAdmin, loginAdmin } from '../Auth/adminAuth'

const router = express.Router();



router.post('/admin/register', async (req, res) => {
  const { username, password } = req.body;
  await registerAdmin(username,email, password);
  res.status(201).send('Admin registered successfully');
});

router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  const token = await loginAdmin(username, password);
  res.json({ token });
});

module.exports = router;
