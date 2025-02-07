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

  // Component state now includes date and time
  const [fromLocation, setFromLocation] = useState(locations[0]);
  const [toLocation, setToLocation] = useState(locations[1]);
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to /booking with query parameters including date and time
    window.location.href = `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&date=${encodeURIComponent(travelDate)}&time=${encodeURIComponent(travelTime)}`;
  };

  // Inline styles for larger fonts and improved controls
  const formContainerStyle = {
    width: '80%',
    margin: '0 auto',
    fontSize: '1.8rem'
  };

  // Updated: Each form group now uses flexDirection column
  const formGroupStyle = {
    margin: '20px 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' // Change to 'flex-start' if you prefer left alignment
  };

  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  // Using one common style for select and input fields
  const inputStyle = {
    height: '60px',
    fontSize: '2rem',
    padding: '0 20px',
    width: '200px',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    height: '60px',
    fontSize: '1.8rem',
    padding: '0 20px'
  };

  // Style for visible labels
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1.2rem'
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
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            {/* Pickup Location */}
            <div style={formGroupStyle}>
              <label htmlFor="from" style={labelStyle}>Pickup Location</label>
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
            <div style={formGroupStyle}>
              <label htmlFor="to" style={labelStyle}>Destination Location</label>
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
            <div style={formGroupStyle}>
              <label htmlFor="date" style={labelStyle}>Pick Up Date</label>
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
            <div style={formGroupStyle}>
              <label htmlFor="time" style={labelStyle}>Pick Up Time</label>
              <input
                id="time"
                type="time"
                className="form-control"
                style={inputStyle}
                value={travelTime}
                onChange={(e) => setTravelTime(e.target.value)}
              />
            </div>

            {/* Submit Button */}
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
