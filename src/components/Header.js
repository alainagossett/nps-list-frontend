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
                <>
                <img style={{
                    height: '3.125rem',
                    width: '3.125rem',
                    borderRadius: '50%'
                }} src={props.user.photoURL} 
                    alt={props.user.displayName} />
                <button onClick={logout}>Logout</button>
                </>
                :
                <button onClick={login}>Login</button>
            }
        </nav>
    )
};

export default Header