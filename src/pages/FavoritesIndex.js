import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledFavoritesIndex } from '../styles';

const FavoritesIndex = (props) => {
  const [favorite, setFavorite] = useState([]);
  const faveUrl = 'https://favorite-parks-p3.herokuapp.com/favorites/';
  // const faveUrl = 'http://localhost:3001/favorites/'

  //DELETE favorites
  const deleteFavorite = async (id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(faveUrl + id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const favorites = await response.json();
    setFavorite(favorites);
  };

  const handleLogout = async () => {
    setFavorite([]);
  };

  useEffect(() => {
    //GET list of favorites
    const getFavorites = async () => {
      if (!props.user) return;
      const token = await props.user.getIdToken();
      const faveResponse = await fetch(faveUrl, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      const faveData = await faveResponse.json();
      setFavorite(faveData);
    };
    if (props.user) {
      getFavorites();
    } else {
      handleLogout();
    }
  }, [props.user]);

  const loaded = () => {
    if (props.user) {
        return (
            <div className='index'>
                <StyledFavoritesIndex>
                    {favorite.map((f) => (
                  <div key={f._id} className="favoriteList">
                    <h2>{f.parkName}</h2>
                    <p>{f.notes}</p>
                    <Link
                      to={`/favorites/${f._id}`}
                      //render a page component to show the park details
                      className='favoritesNotes'
                    >
                      Add Notes
                    </Link>
                    <button className="deleteBtn" onClick={() => deleteFavorite(f._id)}>
                      DELETE
                    </button>
                  </div>
                ))
                    }
                </StyledFavoritesIndex>
            </div>
        )
    } else {
      return <h1 style={{textAlign:'center', margin:'2em'}}>You must be logged in to view favorites</h1>;
    }
    
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return favorite ? loaded() : loading();
};

export default FavoritesIndex;
