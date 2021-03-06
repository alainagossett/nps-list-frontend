import { useState } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { StyledApp } from '../styles'

import FavoritesIndex from '../pages/FavoritesIndex';
import ParkDisplay from '../pages/ParkDisplay';

const Main = (props) => {
  const [parkState, setParkState] = useState(null);
  const [inputState, setInputState] = useState('');

  console.log('Props: ', props);

  const handleClick = async () => {
    if (inputState.length < 2) return;
    //if length is less than state abbreviation, return
    const URL =
      'https://favorite-parks-p3.herokuapp.com/parks/search?stateCode=';
    const response = await fetch(URL + inputState);
    const data = await response.json();
    setParkState(data);
    setInputState('');
  };

  const handleChange = (s) => {
    setInputState(s.target.value);
  };

  const statesList = [
    'AK',
    'AL',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];

  return (
    <StyledApp>
      <Switch>
        <Route path="/favorites">
          <ParkDisplay user={props.user} />
        </Route>
        <Route
          exact
          path="/favorites"
          render={(p) =>
            props.user ? (
              <FavoritesIndex user={props.user} />
            ) : (
              <Redirect to="/parks" />
            )
          }
        />
      </Switch>
      <div className="search">
        <select className="stateSel" value={inputState} onChange={handleChange}>
          <option value="">Select State</option>
          {statesList.map((s) => {
            return (
              <option key={s} value={s}>
                {s}
              </option>
            );
          })}
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
      {parkState ? (
        <div className="parkList">
          <ul className="parks" style={{maxHeight: '400px', overflow: 'auto'}}>
            {
              //Iterate over list of park codes and generate a list of Link components
              parkState.map((pl) => {
                return (
                  <li key={pl.code}>
                    <Link
                      to={`/parks/${pl.code}`}
                      //render a page component to show the park details
                    >
                      {`${pl.name} (${pl.code})`}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      ) : (
        <h1>Search By State!</h1>
      )}
    </StyledApp>
  );
};

export default Main;
