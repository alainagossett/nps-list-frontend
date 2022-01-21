import { useState, useEffect } from 'react';

import './App.css';
import './styles.scss';
import './index.css';

//Import Components
import Main from './components/Main';
// import ParkDisplay from './components/ParkDisplay';
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <Main />
      {/* <ParkDisplay /> */}
    </div>
  );
}

export default App;
