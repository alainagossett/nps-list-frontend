import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StyledParkDisplay } from '../styles';

import '../App.css';

const ParkDisplay = (props) => {
  console.log('props: ', props);

  //GET PARK DETAILS TO DISPLAY ON PAGE

  const [park, setPark] = useState(null);
  //invoke useState to store the parkCode value
  const parkCode = props.match.params.code;
  const parkUrl = 'https://favorite-parks-p3.herokuapp.com/parks/';

  async function lookupPark() {
    const details = await fetch(parkUrl + parkCode);
    const data = await details.json();
    setPark(data);
  }

  //ADD PARK TO FAVORITES
  const [isDisabled, setIsDisabled] = useState(false);

  const [favorite, setFavorite] = useState({
    parkName: '',
    parkDescr: '',
    parkCode: '',
    notes: '',
    uId: '',
  });
  const favoriteUrl = 'https://favorite-parks-p3.herokuapp.com/favorites/';

  const createFavorite = async () => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(favoriteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        parkName: park.data[0].fullName,
        parkDescr: park.data[0].description,
        parkCode: park.data[0].parkCode,
        notes: '',
        uId: props.user.uid,
      }),
    });
    const favorites = await response.json();
    setFavorite(favorites);
    console.log(favorites);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await createFavorite(favorite);
    alert('Added to favorites!');
    setIsDisabled(true);
  };

  //Checks if favorite already exists in favorite list
  //Disables favorite button if park exists
  async function lookupFavorite() {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const faves = await fetch(favoriteUrl, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const faveData = await faves.json(faves);
    console.log('faveData: ', faveData);
    const found = faveData.find((f) => parkCode === f.parkCode);

    if (found) {
      console.log('Found');
      setIsDisabled(true);
    } else {
      console.log('Not found');
      setIsDisabled(false);
    }
  }

  useEffect(() => {
    lookupPark();
    lookupFavorite();
  }, []);

  const loading = () => <h1>Loading...</h1>;

  const loaded = () => {
    const parkInfo = park.data[0];
    return (
      <StyledParkDisplay>
        <h1 className="parkName">{parkInfo.fullName}</h1>
        <div>
        <p className="parkInfo">{parkInfo.description}</p>
        <img
          className="parkImg"
          src={parkInfo.images[0].url}
          alt={parkInfo.fullName}
        />
        <br />
        <Link to={`/places/${parkInfo.parkCode}`} className='exploreLink'>
          Explore places in this park
        </Link>
        <br />
        <br />
        {props.user && (
          <button disabled={isDisabled} onClick={handleClick}>
            Add to Favorites
          </button>
        )}
        </div>
      </StyledParkDisplay>
    );
  };

  return park ? loaded() : loading();
};

export default ParkDisplay;
