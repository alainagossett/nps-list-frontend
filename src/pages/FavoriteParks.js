import React, { useEffect, useState } from 'react';

const FavoriteParks = (props) => {

    const [favorite, setFavorite] = useState([])
    const faveUrl = 'http://localhost:3001/favorites'

    //GET list of favorites
    const getFavorites = async () => {
        const faveResponse = await fetch(faveUrl)
        const faveData = await faveResponse.json()
        setFavorite(faveData)
    }

    //UPDATE favorites
    // const updateFavorites = async (fave, id) => {
    //     await fetch(faveUrl + id, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(fave),
    //     })
    //     //update favorites list
    //     getFavorites()
    // }

    // const handleUpdate

    // const id = favorite.match.params.id;

    //DELETE favorites
    const deleteFavorite = async (id) => {
        console.log(id)
        // await fetch(faveUrl + favorite._id, {
        //     method: "DELETE",
        // })
        // getFavorites()
    }

    // const handleClick = () => {
    //     props.deleteFavorite(id);
    //     props.history.push('/favorites');
    // }

    useEffect(() => getFavorites(), [])

   const loaded = () => {
       console.log("favorite data: ", favorite)
       return favorite.map((f) => (
           <div key={f._id} className='favoriteList'>
               <h2>{f.parkName}</h2>
               <p>{f.notes}</p>
               <button id="delete" onClick={() => deleteFavorite(f._id)}>DELETE</button>
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