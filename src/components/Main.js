import { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../App.css';
import Index from '../pages/Index';
import Show from '../pages/Show';

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
                    parkState.map((p) => {
                        return <li key={p}>
                            <Link to="/parks/:code">
                            {p}
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