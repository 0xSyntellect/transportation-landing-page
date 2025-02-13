// File: src/components/AutoCompleteInput.jsx
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
      fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(value)}`)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data);
          setShowSuggestions(true);
        })
        .catch(err => console.error("Error fetching suggestions:", err));
    }, 500); // 500ms delay

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
          // delay hiding suggestions so that click event can register
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
