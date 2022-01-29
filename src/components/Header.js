import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/parks">
                <div>Search Parks</div>
            </Link>
            <Link to="/favorites">
                <div>Favorite</div>
            </Link>
            {
                props.user ? 
                <button onClick={logout}>Logout</button>
                :
                <button onClick={login}>Login</button>
            }
        </nav>
    )
};

export default Header