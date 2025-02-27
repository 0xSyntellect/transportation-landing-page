// src/components/AutoCompleteInput.jsx
import React, { useState, useEffect, useRef } from 'react';

export const AutoCompleteInput = ({ value, onChange, placeholder, iconClass }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (value.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
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

  const handleSuggestionClick = suggestion => {
    onChange(suggestion.display_name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="autocomplete-wrapper" style={{ position: 'relative' }}>
      {iconClass && (
        <i
          className={iconClass}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666',
            zIndex: 2,
          }}
        ></i>
      )}
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          paddingLeft: iconClass ? '35px' : '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          height: '40px',
          fontSize: '0.95rem',
          outline: 'none'
        }}
        onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
        onBlur={() => { setTimeout(() => setShowSuggestions(false), 200); }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1,
            listStyle: 'none',
            padding: 0,
            margin: 0,
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
