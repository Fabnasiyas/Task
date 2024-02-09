// backend/services/authService.js
import adminModel from '../models/adminModel'
const { generateToken } = require('../utils/jwt');

async function registerAdmin(username, password) {
  const newUser = new adminModel({ username, password });
  await newUser.save();
}

async function loginAdmin(username, password) {
  const user = await adminModel.findOne({ username, password });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  const token = generateToken({ userId: user._id, role: 'user' });
  return token;
}

module.exports = { registerAdmin, loginAdmin};
