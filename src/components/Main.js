import { useState } from 'react';

const Form = (props) => {
   
  const [parkState, setParkState] = useState(null);
  const [inputState, setInputState] = useState("");
  
  const handleClick = async () => {
    if(inputState.length < 2) return;
    //if length is less than state abbreviation, return
    const URL = 'http://localhost:3001/search?stateCode='
    const response = await fetch(URL + inputState);
    const data = await response.json();
    setParkState(data);
    setInputState("");
  }

  const handleChange = (s) => {
      setInputState(s.target.value);
  }

    return (
        <>
        <div>
                <input 
                type="text"
                placeholder="AL"
                value={inputState}
                onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
        </div>
            { parkState ?
        <div>
                <h1>{parkState.data[0].parkCode}</h1>

        </div>
        :
        <h1>No Parks</h1>
            }
        </>
    )
};


export default Form;