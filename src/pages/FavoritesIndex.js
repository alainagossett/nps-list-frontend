import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FavoritesIndex = (props) => {

    const [favorite, setFavorite] = useState([])
    // const faveUrl = 'https://favorite-parks-p3.herokuapp.com/favorites/'
    const faveUrl = 'http://localhost:3001/favorites/'

    //GET list of favorites
    const getFavorites = async () => {
            const faveResponse = await fetch(faveUrl)
            const faveData = await faveResponse.json()
            setFavorite(faveData)
    }

    //DELETE favorites
    const deleteFavorite = async (id) => {
        await fetch(faveUrl + id, {
            method: "DELETE",
        })
        getFavorites()
    }

    useEffect(() => {
        if(props.user) {
            getFavorites()
        }
    }, [props.user]);

   const loaded = () => {
       if (props.user) {
           return favorite.map((f) => (
               <div key={f._id} className='favoriteList'>
                   <h2>{f.parkName}</h2>
                   <p>{f.notes}</p>
                   <Link to={`/favorites/${f._id}`}
                            //render a page component to show the park details
                            >
                                Details
                                </Link>
                <button className="deleteBtn" onClick={() => deleteFavorite(f._id)}>DELETE</button>
               </div>
           ))
       } else {
           return <h1>You must be logged in to view favorites</h1>
       }
   }

   const loading = () => {
       return <h1>Loading...</h1>
   }

   return favorite ? loaded() : loading()
}

export default FavoritesIndex;