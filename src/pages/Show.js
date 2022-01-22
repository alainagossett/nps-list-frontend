import { useState, useEffect } from 'react';

function Show(props) {

    const [park, setPark] = useState(null);
    //invoke useState to store the parkCode value
    const URL = 'http://localhost:3001/parks/search?parkCode='

    async function lookupPark() {
    const parkCode = props.match.params;
    console.log(parkCode)
    const details = await fetch(URL + parkCode)
    const data = await details.json();
    setPark(data);
    }

    useEffect(() => {
        lookupPark();
    }, [])
    return (
        <div className='parkShow'>
            <h1>{park.data.fullName}</h1>
        </div>
    )
}

export default Show;