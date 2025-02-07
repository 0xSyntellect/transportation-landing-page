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

  // Component state for the form
  const [fromLocation, setFromLocation] = useState(locations[0]);
  const [toLocation, setToLocation] = useState(locations[1]);
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /booking with query parameters
    window.location.href = `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&date=${encodeURIComponent(travelDate)}&time=${encodeURIComponent(travelTime)}`;
  };

  // Container style: a pill-shaped card that forces its children into one row
  const formContainerStyle = {
    width: '90%',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '50px', // Adjust this value for more rounded (pill-like) ends
    padding: '20px 40px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap' // Prevent wrapping so everything stays in one row
  };

  // Style for each dropdown group – let them expand equally
  const dropdownGroupStyle = {
    margin: '10px',
    flex: '1'
  };

  // Style for the button group – do not allow it to grow or shrink
  const buttonGroupStyle = {
    margin: '10px',
    flex: '0 0 auto'
  };

  // Style shared by both dropdowns and inputs
  const inputStyle = {
    height: '50px',
    fontSize: '1.6rem',
    padding: '0 15px',
    width: '100%',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    height: '50px',
    fontSize: '1.6rem',
    padding: '0 30px'
  };

  return (
    <div
      id="booking"
      style={{
        marginTop: '60px',
        padding: '40px 0',
        backgroundColor: '#f8f8f8'
      }}
    >
      <div className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Book Your Ride</h2>
        <form onSubmit={handleSubmit} style={formContainerStyle}>
          {/* Pickup Location */}
          <div style={dropdownGroupStyle}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>
              Pickup Location
            </label>
            <select
              id="from"
              className="form-control"
              style={inputStyle}
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Destination Location */}
          <div style={dropdownGroupStyle}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>
              Destination Location
            </label>
            <select
              id="to"
              className="form-control"
              style={inputStyle}
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Pick Up Date */}
          <div style={dropdownGroupStyle}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>
              Pick Up Date
            </label>
            <input
              id="date"
              type="date"
              className="form-control"
              style={inputStyle}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>

          {/* Pick Up Time */}
          <div style={dropdownGroupStyle}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>
              Pick Up Time
            </label>
            <input
              id="time"
              type="time"
              className="form-control"
              style={inputStyle}
              value={travelTime}
              onChange={(e) => setTravelTime(e.target.value)}
            />
          </div>

          {/* Book Now Button */}
          <div style={buttonGroupStyle}>
            <button type="submit" className="btn btn-custom btn-lg" style={buttonStyle}>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
