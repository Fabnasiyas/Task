
import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/userAuth/register`, {
        username,
        email,
        password,
      });

      // Assuming the response contains data you want to use
      console.log('Signup successful:', response.data);

      // Set state to indicate successful signup
      setSignupSuccess(true);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div>
      {isSignupSuccess && <Navigate to="/login" />} {/* Conditional rendering of Navigate */}
      <h2>Signup</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
      <Link to='/login'><button>login</button></Link>

    </div>
  );
};

export default Signup;
