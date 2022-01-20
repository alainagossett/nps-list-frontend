import { useState } from 'react';

const Form = (props) => {
    const [formState, setFormState] = useState({
        searchTerm: ''
    });

    const handleChange = (event) => {
        setFormState({ searchTerm: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getPark(formState.searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formState.searchTerm} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};


export default Form;