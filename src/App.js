import React from 'react'

import { Route, Switch } from 'react-router-dom';

import './App.css';
import './styles.scss';
import './index.css';

//Import Components
import Main from './components/Main';
// import ParkDisplay from './components/ParkDisplay';
import Header from './components/Header'

//Import Pages
import Show from './pages/Show.js';


function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/parks'>
      <Main />
      </Route>
    <Route path='/parks/:code' render={(props) => <Show {...props}/>} />
      </Switch>
      {/* <ParkDisplay /> */}
    </div>
  );
}

export default App;
