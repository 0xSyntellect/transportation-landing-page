// src/components/Booking.jsx
import React, { useState } from 'react';

export const Booking = () => {
  // Hardcoded list of Istanbul locations
  const locations = [
    "Taksim",
    "Kadikoy",
    "Besiktas",
    "Sisli",
    "Uskudar",
    "Levent",
    "Sariyer",
    "Bakirkoy",
    "Eminonu"
  ];

  // Hardcoded date options (for simplicity)
  const dates = [
    "Today",
    "Tomorrow",
    "In 2 days",
    "In 3 days",
    "In 4 days",
    "In 5 days"
  ];

  // Component state
  const [fromLocation, setFromLocation] = useState(locations[0]);
  const [toLocation, setToLocation] = useState(locations[1]);
  const [travelDate, setTravelDate] = useState(dates[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /booking with query parameters:
    window.location.href = `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&date=${encodeURIComponent(travelDate)}`;
  };

  // Updated inline styles for larger fonts and controls
  const formContainerStyle = {
    width: '80%',
    margin: '0 auto',
    fontSize: '1.8rem' // Increased overall font size for the form container
  };

  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const formGroupStyle = {
    margin: '0 20px 20px', // Increase horizontal and vertical spacing
  };

  const selectStyle = {
    height: '60px',       // Increased height for dropdown
    fontSize: '2rem',    // Larger text inside dropdown
    padding: '0 50px',
    width: '200px',
    fontWeight: 'bold' 
  };

  const buttonStyle = {
    height: '60px',        // Increased height for button
    fontSize: '1.8rem',     // Larger button text
    padding: '0 20px'
  };

  return (
    <div id="booking" style={{ marginTop: '-120px', padding: '20px 0', backgroundColor: '#f8f8f8' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Book Your Ride</h2>
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="from" className="sr-only">From</label>
              <select
                id="from"
                className="form-control"
                style={selectStyle}
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              >
                {locations.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="to" className="sr-only">To</label>
              <select
                id="to"
                className="form-control"
                style={selectStyle}
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              >
                {locations.map((loc, i) => (
                  <option key={i} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="date" className="sr-only">Date</label>
              <select
                id="date"
                className="form-control"
                style={selectStyle}
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              >
                {dates.map((dateOption, i) => (
                  <option key={i} value={dateOption}>{dateOption}</option>
                ))}
              </select>
            </div>
            <div style={formGroupStyle}>
              <button type="submit" className="btn btn-custom btn-lg" style={buttonStyle}>
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
