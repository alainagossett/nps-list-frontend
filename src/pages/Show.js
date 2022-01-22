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
    return (
        <div className='parkShow'>
            <h1>{park.data[0].bodyText}</h1>
        </div>
    )
}

export default Show;