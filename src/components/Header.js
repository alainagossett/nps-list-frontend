import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/parks">
                <div>Park Planner</div>
            </Link>
            <Link to="/favorites">
                <div>Favorites</div>
            </Link>
        </nav>
    )
};

export default Header