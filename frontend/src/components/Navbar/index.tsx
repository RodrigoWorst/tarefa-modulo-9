import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () =>{
    return(
        <div className="navbar bg-primary main-nav">
            <Link to="/" className="nav-logo-text">
                <h2>MovieFlix</h2>
            </Link>
        </div>
    );
}

export default Navbar;