
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const authToken = localStorage.getItem('token');
console.log(authToken,'authToken');
        // Make an authenticated request with the token
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/user/home`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        // Assuming the response contains data you want to use
        console.log(response.data);
        setData(response.data);

        // Handle the data or set state accordingly
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Welcome Home</h1>
      {data && (
        <div>
          {/* Render data from the response */}
          <p>User: {data.user.username}</p>
          <p>Role: {data.user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
