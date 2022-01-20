import { useState, useEffect } from 'react';

import './App.css';
import './styles.scss';
import './index.css';

//Import Components
import Form from './components/Form';
import ParkDisplay from './components/ParkDisplay';


function App() {
  const [parkState, setParkState] = useState(null);
  const [inputState, setInputState] = useState("");
  
  const handleClick = async () => {
    if(inputState.length < 2) return;
    //if length is less than state abbreviation, return
    const URL = 'http://localhost:3001/search?stateCode='
    const response = await fetch(URL + inputState);
    const data = await response.json();
    setParkState(data);
    setInputState("");
  }

  const handleChange = (s) => {
      setInputState(s.target.value);
  }

  return (
    <div className="App">
      <Form />
      <ParkDisplay />
    </div>
  );
}

export default App;
