// backend/services/authService.js
import userModel from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';

async function registerUser(username,email, password) {
  const newUser = new userModel({ username, email,password });
  await newUser.save();
  console.log('saved successfully');
} 

async function loginUser(username, password) {
    console.log(username, password,'............');
  const user = await userModel.findOne({ username, password });
  if (!user) {
    throw new Error('Invalid username or password');
  }
  console.log('login successfully');

  const token = generateToken({ userId: user._id, role: 'user' });
  return token;
}

export { registerUser, loginUser };
