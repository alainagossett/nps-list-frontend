import { useState } from "react";
import { Link } from "react-router-dom";

const FavoriteParks = (props) => {
   const loaded = () => {
       return props.favorite.map((fave) => (
           <div key={fave._id}>
               <h1>{fave.parkCode}</h1>
           </div>
       ))
   }

   const loading = () => {
       return <h1>Loading...</h1>
   }

   return props.favorite ? loaded() : loading()
}

export default FavoriteParks;