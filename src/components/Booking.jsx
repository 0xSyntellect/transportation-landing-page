// src/components/Booking.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import { AutoCompleteInput } from './AutoCompleteInput';

export const Booking = () => {
  const [activeTab, setActiveTab] = useState('istanbul');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  // State for date & time with default set to now + 2 hours.
  const [travelDate, setTravelDate] = useState(() => {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    // Format to "YYYY-MM-DDTHH:MM" for datetime-local input
    return now.toISOString().slice(0, 16);
  });

  // Function to compute minimum allowed datetime (now + 2 hours)
  const getMinDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    return now.toISOString().slice(0, 16);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/booking?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(toLocation)}&passengers=${passengerCount}&date=${encodeURIComponent(travelDate)}`
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
            <AutoCompleteInput
              value={fromLocation}
              onChange={setFromLocation}
              placeholder="Istanbul Airport (IST)"
              iconClass="fa fa-map-marker"
            />
          </div>
        </div>

        {/* TO */}
        <div className="form-group">
          <label>To</label>
          <div className="input-icon">
            <AutoCompleteInput
              value={toLocation}
              onChange={setToLocation}
              placeholder="Airport, Hotel or District..."
              iconClass="fa fa-map-marker"
            />
          </div>
        </div>

        {/* Date & Time Selection */}
        <div className="form-group">
          <label>Date &amp; Time</label>
          <input
            type="datetime-local"
            value={travelDate}
            min={getMinDateTime()}
            onChange={(e) => setTravelDate(e.target.value)}
            step="1800"  // 30 minute intervals (1800 seconds)
          />
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

        {/* SUBMIT BUTTON */}
        <button type="submit" className="book-now-btn">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};
