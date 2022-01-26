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
        const details = await fetch(parkUrl + parkCode)
        const data = await details.json();
        console.log(parkCode)
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
                body: JSON.stringify(
                    {
                        "parkName": park.data[0].fullName,
                        "parkDescr": park.data[0].description,
                        "parkCode": park.data[0].parkCode,
                    })
                })
                console.log(park)
        }

        const handleChange = (event) => {
            setFavorite((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }

        const handleClick = (event) => {
            event.preventDefault()
            createFavorite(favorite)
            alert('Added to favorites!')
            // setFavorite({
            // parkName: "",
            // parkDescr: "",
            // parkCode: "",
            // notes: "",
            // //TO DO: If parkCode exists in favorites, hide the input fields, replace with already added button?
            // })
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
          <button onClick={handleClick}>Add to Favorites</button>
            </>
        )
    }

    return park ? loaded() : loading();
};


export default ParkDisplay;