import React, { useEffect, useState } from 'react';

const FavoriteParks = (props) => {

    const [favorite, setFavorite] = useState([])
    const faveUrl = 'http://localhost:3001/favorites'
    const getFavorites = async () => {
        const faveResponse = await fetch(faveUrl)
        const faveData = await faveResponse.json()
        setFavorite(faveData)
    }

    useEffect(() => getFavorites(), [])

   const loaded = () => {
       return favorite.map((f) => (
           <div key={f._id} className='favoriteList'>
               <h1>{f.parkName}</h1>
           </div>
       ))
   }

   const loading = () => {
       console.log(favorite)
       return <h1>Loading...</h1>
   }

   return favorite ? loaded() : loading()
}

export default FavoriteParks;