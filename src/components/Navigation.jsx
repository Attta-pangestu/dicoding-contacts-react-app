import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/add">Add</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;