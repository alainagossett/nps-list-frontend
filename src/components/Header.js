import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/parks">
                <div>Search Parks</div>
            </Link>
            <Link to="/favorites">
                <div>Favorites</div>
            </Link>
            {
                props.user ? 
                <div className='userLogin'>
                <img className="userImg" src={props.user.photoURL} 
                    alt={props.user.displayName} />
                <button onClick={logout}>Logout</button>
                </div>
                :
                <button onClick={login}>Login</button>
            }
        </nav>
    )
};

export default Header