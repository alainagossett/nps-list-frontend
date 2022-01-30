import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';
import { StyledHeader } from '../styles'

function Header(props) {
  return (
    <StyledHeader>
        <div className='navLinks'>
      <Link to="/parks">
        <div>Search Parks</div>
      </Link>
      <Link to="/favorites">
        <div>Favorites</div>
      </Link>
        </div>
      {props.user ? (
        <div className="userLogin">
          <img
            className="userImg"
            src={props.user.photoURL}
            alt={props.user.displayName}
          />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </StyledHeader>
  );
}

export default Header;
