import React from "react";
import { Link } from "react-router-dom";

import {FiHome, FiPlusCircle, FiLogOut} from 'react-icons/fi';

function Navigation({logoutHandler, userName}) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/"><FiHome /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
                <li><button onClick={logoutHandler}>{userName}<FiLogOut /></button></li>
            </ul>
        </nav>
    );
}

export default Navigation;