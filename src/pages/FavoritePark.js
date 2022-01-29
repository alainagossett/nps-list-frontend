import { useState, useEffect } from "react";

const FavoritePark = (props) => {
    
    const id = props.match.params.id;
    const url = 'https://favorite-parks-p3.herokuapp.com/favorites/'

    //GET PARK DATA
    const [park, setPark] = useState([])
    async function lookupFavorite() {
        const faves = await fetch(url)
        const faveData = await faves.json(faves)
        const found = faveData.find((f) => id === f._id)
        console.log("found data: ", found)
       setPark(found)
    }

    //UPDATE PARK NOTE
        const [ note, setNote ] = useState("")
    
        const updateNotes = async (note, id) => {
            const response = await fetch(url + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                },
                // body: JSON.stringify(note)
                body: JSON.stringify(
                    {
                        "parkName": park.parkName,
                        "parkDescr": park.parkDescr,
                        "parkCode": park.parkCode,
                        "notes": note
                    })
            })
            const parkNote = await response.json();
            setNote(parkNote);
            console.log(response)
        }
        
        const handleChange = (event) => {
            setNote({
                ...note,
                [event.target.name]: event.target.value
            });
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            updateNotes(note)
            console.log(note)
        }

    useEffect(() => {
        lookupFavorite()
        
    }, [])

    return (
        <div>
            <h1>Park:</h1>
            <h2>{park.parkName}</h2>
            <p>{park.parkDescr}</p>
            <p>{park.parkCode}</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="notes"
                placeholder="add some notes"
                value={note.note}
                onChange={handleChange}
                />
                <input type="submit" value="Add Notes"/>
            </form>
        </div>
    )
}

export default FavoritePark;