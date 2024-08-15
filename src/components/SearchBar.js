// src/components/SearchBar.js
import React, { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';

function SearchBar() {
    const [query, setQuery] = useState('');
    const { handleSearch } = useContext(BlogContext);

    const handleChange = (e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className='search-bar-container'>
            <input
                type="text"
                placeholder="Search blogs by title..."
                value={query}
                onChange={handleChange}
                className="search-bar"
            />
        </div>
    );
}

export default SearchBar;
