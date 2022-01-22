import { useState, useEffect } from 'react';

function Show(props) {

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
            <div className='parkShow'>
                <h1>Park Details</h1>
                {
                    park.total!=="0" ? 
                    <div>
                    <h1>{park.data[0].title}</h1>
                    <h2>{park.data[0].bodyText}</h2>
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