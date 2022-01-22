import { useState, useEffect } from 'react';

import '../App.css';


const ParkDisplay = (props) => {
    const [park, setPark] = useState(null);
    //invoke useState to store the parkCode value
    const parkCode = props.match.params.code;
    const URL = 'http://localhost:3001/parks/'

    async function lookupPark() {
        console.log(parkCode)
        const details = await fetch(URL + parkCode)
        const data = await details.json();
        console.log("Park Details:", data)
        setPark(data);
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
            <p>Explore places in this park</p>
            </>
        )
    }

    return park ? loaded() : loading();
};


export default ParkDisplay;