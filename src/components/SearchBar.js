import React, { useState } from 'react';
import { countries } from '../data/countries'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);
  
    const results = countries[0].filter(country => 
      country.country?.toLowerCase().includes(input) ||
      country.capital?.toLowerCase().includes(input)
    );
  
    setFilteredCountries(results);
  };
  

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={query}
        onChange={handleInputChange}
      />
      {query && (
        <ul className="suggestions">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li key={index}>
                <strong>{country.country}</strong> - {country.capital}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
