import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledPlaceDisplay } from '../styles';

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
      <StyledPlaceDisplay>
        <Link to={`/parks/${props.match.params.code}`} className="backbtn">&#11013;Back</Link>
        <h1 className='title'>Places to see in this park</h1>
        {place.total !== '0' ? (
          <div className='placesResults'>
            {place.data.map((p) => {
              return (
                <div key={p.id} className='placeDetails'>
                  <a href={p.url} rel="noopener noreferrer">
                    <h2 className='placeName'>{p.title}</h2>
                  </a>
                  <img
                    className="placeImg"
                    src={p.images[0].url}
                    alt={p.title}
                  />
                  <p className='placeDescr'>{p.audioDescription}</p>
                  <br />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No park details to display at this time</p>
        )}
      </StyledPlaceDisplay>
    );
  };

  return place ? loaded() : loading();
}

export default PlaceDisplay;
