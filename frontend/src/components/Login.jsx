
import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/userAuth/login`, {
        username,
        password,
      });

      // Assuming the response contains data you want to use
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      // Set state to indicate successful login
      setLoginSuccess(true);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  // Redirect to "/home" if login was successful
  if (isLoginSuccess) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
