import React from "react";
import PropTypes from 'prop-types';

function SearchBar({keywordUrl, searchHandler }) {
    return (
        <input
            className="search-bar"
            type="search"
            placeholder="Cari berdasarkan nama"
            value={keywordUrl}
            onChange={((event) => {
                searchHandler(event.target.value);
            })}
        />
    );
}

SearchBar.propTypes = {
    keywordUrl : PropTypes.string.isRequired,
    searchHandler : PropTypes.func.isRequired
}


export default SearchBar;