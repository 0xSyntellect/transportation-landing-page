// src/components/AutoCompleteInput.jsx
import React, { useState, useEffect, useRef } from 'react';

export const AutoCompleteInput = ({ value, onChange, placeholder }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimer = useRef(null);

  useEffect(() => {
    // If the input is empty, clear suggestions.
    if (value.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    // Debounce the API call
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      // The viewbox parameters here restrict the search area to Istanbul.
      // Format: viewbox=[minLon],[maxLat],[maxLon],[minLat] with bounded=1.
      const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&viewbox=28.5,41.2,29.7,40.7&bounded=1&q=${encodeURIComponent(value)}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data);
          setShowSuggestions(true);
        })
        .catch(err => console.error("Error fetching suggestions:", err));
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [value]);

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion.display_name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-wrapper" style={{ position: 'relative' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
        onBlur={() => {
          // Delay hiding suggestions to allow click events to register
          setTimeout(() => setShowSuggestions(false), 200);
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          className="suggestions-list"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 10,
            listStyle: 'none',
            padding: '0',
            margin: '0',
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{ padding: '8px', cursor: 'pointer' }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
