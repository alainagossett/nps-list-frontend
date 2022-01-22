import { useState, useEffect } from 'react';

import { Link, Route } from 'react-router-dom';

import '../App.css';
import FavoriteParks from './FavoriteParks';


const ParkDisplay = (props) => {
    const [park, setPark] = useState(null);
    //invoke useState to store the parkCode value
    const parkCode = props.match.params.code;
    const parkUrl = 'http://localhost:3001/parks/'

    async function lookupPark() {
        console.log(parkCode)
        const details = await fetch(parkUrl + parkCode)
        const data = await details.json();
        console.log("Park Details:", data)
        setPark(data);
        }

    const [favorite, setFavorite] = useState(null)
    const handleAdd = (event) => {
    event.preventDefault();
    props.addFavorite(favorite);
}

        useEffect(() => {
            lookupPark();
        }, [])

        const loading = () => <h1>Loading...</h1>

        const loaded = () => {
        return (
            <>
            <h1>{park.data[0].fullName}</h1>
            <p>{park.data[0].description}</p>
            <img className="parkImg" src={park.data[0].images[0].url} alt={park.data[0].fullName} />
            <br/>
            <Link to={`/places/${park.data[0].parkCode}`}>Explore places in this park</Link>
            <br/>
            <br/>
            <form onSubmit={handleAdd}>
                <input 
                type="text"
                name="parkCode"
                value={park.data[0].parkCode}
                disabled="true"
                />
            </form>
            <input type="submit" value="Add to Favorites"/>
            </>
        )
    }

    return park ? loaded() : loading();
};


export default ParkDisplay;