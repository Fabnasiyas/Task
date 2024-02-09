// import { useEffect } from 'react'
// import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login'
function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}`);
  //       // Assuming the response contains data you want to use
  //       console.log('====================================');
  //       console.log(response);
  //       console.log('====================================');
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
