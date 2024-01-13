import React from "react";
import { LocaleConsumer } from "../context/localeContext";
import PropTypes from 'prop-types';


function SearchBar({keywordUrl, searchHandler }) {
    return (
        <LocaleConsumer>
            {({locale}) => {
                return(
                    <input
                className="search-bar"
                type="search"
                placeholder= {locale==='id'? "Cari berdasarkan nama" : "search by person name" }
                value={keywordUrl}
                onChange={((event) => {
                    searchHandler(event.target.value);
                })}
            />
                );
            }}
            
        </LocaleConsumer>
    );
}

SearchBar.propTypes = {
    keywordUrl : PropTypes.string.isRequired,
    searchHandler : PropTypes.func.isRequired
}


export default SearchBar;