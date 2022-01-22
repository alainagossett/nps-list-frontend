import { useState, useEffect } from 'react';

import '../App.css';

function Show(props) {

    const [place, setPlace] = useState(null);
    //invoke useState to store the parkCode value
    const parkCode = props.match.params.code;
    const URL = 'http://localhost:3001/places/'

async function lookupPlaces() {
    console.log(parkCode)
    const details = await fetch(URL + parkCode)
    const data = await details.json();
    console.log("Place Details:", data)
    setPlace(data);
    }

    useEffect(() => {
        lookupPlaces();
    }, [])

    const loading = () => <h1>Loading...</h1>

    const loaded = () => {
        return (
            <div className='placesShow'>
                <h1>Place Details</h1>
                {
                    place.total!=="0" ? 
                    <div>
                        {
                        place.data.map((p) => {
                            return (
                            <div>
                            <h2 key={p.title}>{p.title}</h2>
                            <img className='placeImg' src={p.images[0].url} alt={p.title} />
                            <p key={p}>{p.audioDescription}</p>
                            </div>
                            )
                        })
                    }
                     </div>
                    :
                    <p>No park details to display at this time</p>
                }

            </div>
        )
    }

    return place ? loaded() : loading();
}

export default Show;