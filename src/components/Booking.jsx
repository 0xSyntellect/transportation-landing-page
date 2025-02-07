// src/components/Booking.jsx
import React, { useState } from 'react';

export const Booking = () => {
  // Hardcoded list of locations
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

  // Component state for form values
  const [fromLocation, setFromLocation] = useState(locations[0]);
  const [toLocation, setToLocation] = useState(locations[1]);
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect with query parameters
    window.location.href = `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&date=${encodeURIComponent(travelDate)}&time=${encodeURIComponent(travelTime)}`;
  };

  // Style for the outer card that wraps the form controls
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  // Container for the input groups
  const inputsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexGrow: 1
  };

  // Each individual form group (label + input/select)
  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px'
  };

  // Style shared by the select and input fields
  const inputStyle = {
    height: '60px',
    fontSize: '2rem',
    padding: '0 20px',
    width: '200px',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  // Label style (displayed on top)
  const labelStyle = {
    marginBottom: '8px',
    fontSize: '1.2rem',
    textAlign: 'center'
  };

  // Container for the button – pushed to the right
  const buttonContainerStyle = {
    marginLeft: 'auto',
    marginTop: '10px'
  };

  // Style for the Book Now button
  const buttonStyle = {
    height: '60px',
    fontSize: '1.8rem',
    padding: '0 20px'
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
        <form onSubmit={handleSubmit}>
          <div style={cardStyle}>
            <div style={inputsContainerStyle}>
              {/* Pickup Location */}
              <div style={inputGroupStyle}>
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
              <div style={inputGroupStyle}>
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
              <div style={inputGroupStyle}>
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
              <div style={inputGroupStyle}>
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
            </div>
            <div style={buttonContainerStyle}>
              <button type="submit" className="btn btn-custom btn-lg" style={buttonStyle}>
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
