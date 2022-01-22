import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
// import Index from '../pages/Index';
// import Show from '../pages/Show';

const Main = (props) => {
   
  const [parkState, setParkState] = useState(null);
  const [inputState, setInputState] = useState("");
  
  const handleClick = async () => {
    if(inputState.length < 2) return;
    //if length is less than state abbreviation, return
    const URL = 'http://localhost:3001/parks/search?stateCode='
    const response = await fetch(URL + inputState);
    const data = await response.json();
    setParkState(data);
    // console.log(parkState)
    setInputState("");
  }

  const handleChange = (s) => {
      setInputState(s.target.value);
  }

    return (
        <>
        <div className='search'>
                <input 
                type="text"
                placeholder="AL"
                value={inputState}
                onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
        </div>
            { parkState ?
        <div className='parkList'>
            <ul className='parks'>
                {
                    //Iterate over list of park codes and generate a list of Link components
                    parkState.map((pl) => {
                        return <li key={pl.code}>
                            <Link to={`/places/${pl.code}`}
                                //render a page component to show the park details
                               
                            >
                            {`${pl.name} (${pl.code})`}
                            </Link>
                        </li>
                    }) 
                }
            </ul>
        </div>
        :
        <h1>Search By State!</h1>
            }
        </>
    )
};


export default Main;