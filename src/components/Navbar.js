import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Import React Bootstrap Icons
import { GeoAlt } from 'react-bootstrap-icons';


const Navbar = () => {
  
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <GeoAlt color="#fff" size={"2em"} />
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/location'>{' '}About your current location</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;