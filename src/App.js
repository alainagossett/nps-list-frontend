import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './services/firebase';

import './styles.scss';
import './index.css';
import './styles.js';

//Import Components
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

//Import Pages
import PlaceDisplay from './pages/PlaceDisplay.js';
import ParkDisplay from './pages/ParkDisplay';
import FavoritesIndex from './pages/FavoritesIndex';
import FavoritePark from './pages/FavoritePark';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
        return () => {
          unsubscribe();
        }
  }, []);

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/parks">
          <Main user={user} />
        </Route>
        <Route
          path="/parks/:code"
          render={(props) => <ParkDisplay {...props} user={user} />}
        />
        <Route
          path="/places/:code"
          render={(props) => <PlaceDisplay {...props} />}
        />
        <Route exact path="/favorites">
          <FavoritesIndex user={user} />
        </Route>
        <Route
          path="/favorites/:id"
          render={(props) => <FavoritePark {...props} user={user} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
