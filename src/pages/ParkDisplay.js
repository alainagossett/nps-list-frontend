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

/////////////////////////////////
        
        const [favorite, setFavorite] = useState({
            parkName: "",
            parkDescr: "",
            parkCode: "",
            notes: "",
        })
        const favoriteUrl = 'http://localhost:3001/favorites/'

        const createFavorite = async (fave) => {
            await fetch(favoriteUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify(fave),
            })
        }

        const handleChange = (event) => {
            setFavorite((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            createFavorite(favorite)
            alert('Added to favorites!')
            setFavorite({
            parkName: "",
            parkDescr: "",
            parkCode: "",
            notes: "",
            //TO DO: If parkCode exists in favorites, hide the input fields, replace with already added button?
            })
        }

        useEffect(() => {
            lookupPark();
        }, [])

        const loading = () => <h1>Loading...</h1>

        const loaded = () => {
            const parkInfo = park.data[0]
            const parkImg = parkInfo.images[Math.floor(Math.random()*parkInfo.images.length)]
        return (
            <>
            <h1>{parkInfo.fullName}</h1>
            <p>{parkInfo.description}</p>
            <img className="parkImg" src={parkInfo.images[0].url} alt={parkInfo.fullName} />
            <br/>
            <Link to={`/places/${parkInfo.parkCode}`}>Explore places in this park</Link>
            <br/>
            <br/>
           <form onSubmit={handleSubmit}>
               <input 
               type="text"
               value={favorite.parkName}
               name="parkName"
               placeholder="park name"
               onChange={handleChange}
               />
               <input 
               type="text"
               value={favorite.parkDescr}
               name="parkDescr"
               placeholder="park description"
               onChange={handleChange}
               />
               <input 
               type="text"
               value={favorite.parkCode}
               name="parkCode"
               placeholder={parkInfo.parkCode}
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