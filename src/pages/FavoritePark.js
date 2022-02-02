import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { StyledFavoritePark } from '../styles';

const FavoritePark = (props) => {
  const id = props.match.params.id;
  const url = 'https://favorite-parks-p3.herokuapp.com/favorites/';

  //GET PARK DATA
  const [park, setPark] = useState([]);
  async function lookupFavorite() {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const faves = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const faveData = await faves.json(faves);
    const found = faveData.find((f) => id === f._id);
    setPark(found);
  }

  //UPDATE PARK NOTE
  const [note, setNote] = useState('');

  const updateNotes = async (note) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    const response = await fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(note),
    });
    const parkNote = await response.json();
    setNote(parkNote);
    alert('Note added!');
  };

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNotes(note);
    setNote({
      note: '',
    });
  };

  const handleLogout = async () => {
    setPark([]);
  };

  useEffect(() => {
    if (props.user) {
      lookupFavorite();
    } else {
      handleLogout();
    }
  }, [props.user]);

  return (
      <StyledFavoritePark>
    <div className='favorite'>
      <h1>{park.parkName}</h1>
      <p>{park.parkDescr}</p>
      <p>Added: {park.createdAt}</p>
      <p>User Notes: {park.notes}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="notes"
          placeholder="add some notes"
          value={note.note}
          onChange={handleChange}
          className='notes'
        />
        <input type="submit" value="Add Notes" className='submitbtn'/>
      </form>
    </div>
    </StyledFavoritePark>
  );
};

export default FavoritePark;
