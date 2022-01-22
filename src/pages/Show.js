import { useState, useEffect } from 'react';

import '../App.css';

function Show(props) {

    const [park, setPark] = useState(null);
    //invoke useState to store the parkCode value
    const parkCode = props.match.params.code;
    const URL = 'http://localhost:3001/places/'

async function lookupPlaces() {
    console.log(parkCode)
    const details = await fetch(URL + parkCode)
    const data = await details.json();
    console.log("Place Details:", data)
    setPark(data);
    }

    useEffect(() => {
        lookupPlaces();
    }, [])

    const loading = () => <h1>Loading...</h1>

    const loaded = () => {
        return (
            <div className='placesShow'>
                <h1>Park Details</h1>
                {
                    park.total!=="0" ? 
                    <div>
                        {
                        park.data.map((p) => {
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

    return park ? loaded() : loading();
}

export default Show;