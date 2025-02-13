// src/components/Booking.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Import useNavigate
import './Booking.css'; // <-- Styling for the booking component

export const Booking = () => {
  const [activeTab, setActiveTab] = useState('istanbul');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [roundTrip, setRoundTrip] = useState(false);

  // Initialize the navigation function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the booking page with query parameters
    navigate(
      `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&passengers=${passengerCount}&roundTrip=${roundTrip}`
    );
  };

  const tabs = [
    { key: 'istanbul', label: 'Istanbul Transfer' },
    { key: 'sabiha', label: 'Sabiha Transfer' },
    { key: 'cappadocia', label: 'Cappadocia Transfer' },
    { key: 'antalya', label: 'Antalya Transfer' },
    { key: 'car', label: 'Car with Driver' },
  ];

  return (
    <div className="booking-card">
      {/* Tabs Row */}
      <ul className="booking-tabs">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={activeTab === tab.key ? 'active' : ''}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* The Booking Form */}
      <form onSubmit={handleSubmit} className="booking-form">
        {/* FROM */}
        <div className="form-group">
          <label>From</label>
          <div className="input-icon">
            <i className="fa fa-map-marker"></i>
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="Istanbul Airport (IST)"
            />
          </div>
        </div>

        {/* TO */}
        <div className="form-group">
          <label>To</label>
          <div className="input-icon">
            <i className="fa fa-map-marker"></i>
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="Airport, Hotel or District..."
            />
          </div>
        </div>

        {/* PASSENGERS */}
        <div className="form-group passenger-group">
          <label>Passenger</label>
          <div className="passenger-input">
            <button
              type="button"
              onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
            >
              –
            </button>
            <span>{passengerCount}</span>
            <button type="button" onClick={() => setPassengerCount(passengerCount + 1)}>
              +
            </button>
          </div>
        </div>

        {/* ROUND TRIP CHECKBOX */}
        <div className="form-group round-trip-group">
          <label>Round Trip</label>
          <input
            type="checkbox"
            checked={roundTrip}
            onChange={() => setRoundTrip(!roundTrip)}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="book-now-btn">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};
