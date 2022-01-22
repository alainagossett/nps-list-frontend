import { useState } from "react"

const FavoriteParks = (props) => {
    //GET Favorite Parks
    const [favorite, setFavorite] = useState(null)
    const favoriteUrl = 'http://localhost:3001/favorites/'
    //Retrieve favorite parks
    const getFavoriteParks = async () => {
        const response = await fetch(favoriteUrl)
        const data = await response.json()
        setFavorite(data);
        }
   return (
       <>
       <div>
           <p>This is the Favorites Page</p>
       </div>
       </>
   )
}

export default FavoriteParks;