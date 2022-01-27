import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';


const ParkDisplay = (props) => {

/*/////////////////////////////////
GET PARK DETAILS TO DISPLAY ON PAGE
*//////////////////////////////////
    const [park, setPark] = useState(null);
    //invoke useState to store the parkCode value
    const parkCode = props.match.params.code;
    const parkUrl = 'http://localhost:3001/parks/'

    async function lookupPark() {
        const details = await fetch(parkUrl + parkCode)
        const data = await details.json();
        setPark(data);
        }

/*/////////////////////////////////
ADD PARK TO FAVORITES
*//////////////////////////////////
        const [isDisabled, setIsDisabled] = useState(false)

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
                        "notes": ""
                    })
                })
        }

        const handleClick = async (event) => {
            event.preventDefault()
           await createFavorite(favorite)
            alert('Added to favorites!')
            setIsDisabled(true)
        }
        
        //Checks if favorite already exists in favorite list
        //Disables favorite button if park exists
        async function lookupFavorite() {
            const faves = await fetch(favoriteUrl)
            const faveData = await faves.json(faves)
           const found = faveData.find((f) => parkCode === f.parkCode)
           if(found) {
               setIsDisabled(true)
           } else {
               setIsDisabled(false)
           }
        }
        
        useEffect(() => {
            lookupPark();
            lookupFavorite()
        }, [])

        const loading = () => <h1>Loading...</h1>

        const loaded = () => {
            const parkInfo = park.data[0]
        return (
            <>
            <h1>{parkInfo.fullName}</h1>
            <p>{parkInfo.description}</p>
            <img className="parkImg" src={parkInfo.images[0].url} alt={parkInfo.fullName} />
            <br/>
            <Link to={`/places/${parkInfo.parkCode}`}>Explore places in this park</Link>
            <br/>
            <br/>
          <button disabled={isDisabled} onClick={handleClick}>Add to Favorites</button>
            </>
        )
    }

    return park ? loaded() : loading();
};


export default ParkDisplay;