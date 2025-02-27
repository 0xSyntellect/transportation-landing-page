// src/components/Booking.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import { AutoCompleteInput } from './AutoCompleteInput'; // import the autocomplete component

export const Booking = () => {
  const [activeTab, setActiveTab] = useState('istanbul');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [roundTrip, setRoundTrip] = useState(false);

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
    { key: 'hourly', label: 'Hourly' },
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
            <AutoCompleteInput
              value={fromLocation}
              onChange={setFromLocation}
              placeholder="Istanbul Airport (IST)"
            />
          </div>
        </div>

        {/* TO */}
        <div className="form-group">
          <label>To</label>
          <div className="input-icon">
            <i className="fa fa-map-marker"></i>
            <AutoCompleteInput
              value={toLocation}
              onChange={setToLocation}
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
