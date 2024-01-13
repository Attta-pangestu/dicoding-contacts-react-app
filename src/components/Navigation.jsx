import React from "react";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../context/localeContext";
import {FiHome, FiPlusCircle, FiLogOut} from 'react-icons/fi';

function Navigation({logoutHandler, userName}) {
    return (
        <LocaleConsumer>
            {({locale, toggleLocale}) => {
                return (
                <nav className="navigation">
                    <ul>
                        <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                        <li><Link to="/"><FiHome /></Link></li>
                        <li><Link to="/add"><FiPlusCircle /></Link></li>
                        <li><button onClick={logoutHandler}>{userName}<FiLogOut /></button></li>
                    </ul>
                </nav>
                )
            }}
        </LocaleConsumer>
    );
}

export default Navigation;