import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';

function App() {

const [brewInfo, setBrewInfo] = useState({})

useEffect(() => {
  const getResponse = async () => {
    const response = await axios.get(`http://localhost:3002/brewery/5`)
    console.log(response)
    setBrewInfo(response.data)
  }
  getResponse()
}, [])


  return (
    <div className="App">
      <h1>Details</h1>
      <h1>{brewInfo.brewName}</h1>
      <img src={brewInfo.logo} />
      <p>{brewInfo.brewery_type}</p>
      <p>Untappd Rating: {brewInfo.rating} / 5</p>
      <a href={brewInfo.website_url} target="_blank">Website</a>
    </div>
  );
}

export default App;
