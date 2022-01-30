import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function PlaceDisplay(props) {
  const [place, setPlace] = useState(null);
  //invoke useState to store the parkCode value
  const parkCode = props.match.params.code;
  // const URL = 'http://localhost:3001/places/'
  const URL = 'https://favorite-parks-p3.herokuapp.com/places/';

  //GET Place Details
  async function lookupPlaces() {
    console.log(parkCode);
    const details = await fetch(URL + parkCode);
    const data = await details.json();
    console.log('Place Details:', data);
    setPlace(data);
  }

  useEffect(() => {
    lookupPlaces();
  }, []);

  const loading = () => <h1>Loading...</h1>;

  const loaded = () => {
    return (
      <div className="placesShow">
        <Link to={`/parks/${props.match.params.code}`}>Back</Link>
        <h1>Places to see in this park</h1>
        {place.total !== '0' ? (
          <div>
            {place.data.map((p) => {
              return (
                <div key={p.id}>
                  <br />
                  <a href={p.url} target="_blank">
                    <h2>{p.title}</h2>
                  </a>
                  <img
                    className="placeImg"
                    src={p.images[0].url}
                    alt={p.title}
                  />
                  <p>{p.audioDescription}</p>
                  <br />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No park details to display at this time</p>
        )}
      </div>
    );
  };

  return place ? loaded() : loading();
}

export default PlaceDisplay;
