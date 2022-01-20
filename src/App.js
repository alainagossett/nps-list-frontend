import { useState, useEffect } from 'react';

import './App.css';
import './styles.scss';
import './index.css';

//Import Components
import Form from './components/Form';
import ParkDisplay from './components/ParkDisplay';


function App() {

  const API_KEY = process.env.REACT_APP_API_KEY
  const [park, setPark] = useState(null);

  const getPark = async (state) => {
    //make fetch request and store response
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${API_KEY}`
    );
    const data = await response.json();

    setPark(data);
  }

  return (
    <div className="App">
     <Form />
     <ParkDisplay />
    </div>
  );
}

export default App;
