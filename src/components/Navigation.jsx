import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import {FiHome, FiPlusCircle, FiLogOut} from 'react-icons/fi';
=======
import {FiHome, FiPlusCircle} from 'react-icons/fi';
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133

function Navigation({logoutHandler}) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/"><FiHome /></Link></li>
<<<<<<< HEAD
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><button onClick={logoutHandler}><FiLogOut /></button></li>
=======
                <li><Link to="/add"><FiPlusCircle /> </Link></li>
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133
            </ul>
        </nav>
    );
}

export default Navigation;