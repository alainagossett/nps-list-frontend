import React, { useEffect, useState } from 'react';

const FavoriteParks = (props) => {

    const [favorite, setFavorite] = useState([])
    const faveUrl = 'http://localhost:3001/favorites/'

    //GET list of favorites
    const getFavorites = async () => {
        const faveResponse = await fetch(faveUrl)
        const faveData = await faveResponse.json()
        setFavorite(faveData)
    }

    

    //UPDATE favorites
    // const [ note, setNote ] = useState(null)

    // const updateNotes = async (note, id) => {
    //     const response = await fetch(faveUrl + id)
    // }
    
    // const handleChange = (event) => {
    //     setNote({
    //         ...note,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.updateNotes(note, id)
    // }

    //DELETE favorites
    const deleteFavorite = async (id) => {
        console.log(id)
        await fetch(faveUrl + id, {
            method: "DELETE",
        })
        getFavorites()
    }

    useEffect(() => getFavorites(), [])

   const loaded = () => {
       console.log("favorite data: ", favorite)
       return favorite.map((f) => (
           <div key={f._id} className='favoriteList'>
               <h2>{f.parkName}</h2>
               <p>{f.parkDescr}</p>
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