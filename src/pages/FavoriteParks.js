import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FavoriteParks = (props) => {
//    const loaded = () => {

    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        const variable = {
            parkName: props.parkName,
            parkDescr: props.parkDescr,
            parkCode: props.parkCode
        }

        axios.post('/favorites', variable)
            .then(response => {
                if(response.data.success) {
                   setFavorite(response.data.favorite)
                } else{
                    alert("Failed to get Favorite")
                }
            })
    }, [])
       return (
           <div>
               <button>Add to Favorites {favorite}</button>
           </div>
       )
//    }

//    const loading = () => {
//        return <h1>Loading...</h1>
//    }

//    return props.favorite ? loaded() : loading()
}

export default FavoriteParks;