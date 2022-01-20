import { useState, useEffect } from 'react';

import './App.css';
import './styles.scss';
import './index.css';

//Import Components
import Form from './components/Form';
import ParkDisplay from './components/ParkDisplay';

function App() {
  return (
    <div className="App">
     <Form />
     <ParkDisplay />
    </div>
  );
}

export default App;
