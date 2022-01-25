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

        const [favorite, setFavorite] = useState({
            userId: "",
            parkCode: "",
            notes: "",
        })
        const favoriteUrl = 'http://localhost:3001/favorites/'
        //Retrieve favorite parks
        const getFavoriteParks = async () => {
            const response = await fetch(favoriteUrl)
            const data = await response.json()
            setFavorite(data);
            }

        const createFavorite = async (fave) => {
            await fetch(favoriteUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(fave),
            })
            getFavoriteParks()
        }

        const handleChange = (event) => {
            setFavorite((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            props.createFavorite(favorite)
            setFavorite({
            userId: "",
            parkCode: "",
            notes: "",
            })
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
           <form onSubmit={handleSubmit}>
               <input 
               type="text"
               value={favorite.userId}
               name="userId"
               placeholder="user id"
               onChange={handleChange}
               />
               <input 
               type="text"
               value={favorite.parkCode}
               name="parkCode"
               placeholder={park.data[0].parkCode}
               onChange={handleChange}
               />
               <input 
               type="text"
               value={favorite.notes}
               name="notes"
               placeholder="enter some notes"
               onChange={handleChange}
               />
               <input type="submit" value="Add to Favorites" />
           </form>
            </>
        )
    }

    return park ? loaded() : loading();
};


export default ParkDisplay;