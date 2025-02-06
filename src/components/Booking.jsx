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
    console.log("From:", fromLocation, "To:", toLocation, "Date:", travelDate);
    // Redirect to a new page (placeholder)
    window.location.href = "/booking";
  };

  return (
    <div id="booking" style={{ padding: '40px 0', backgroundColor: '#f8f8f8' }}>
      <div className="container text-center">
        <h2>Book Your Ride</h2>
        <form onSubmit={handleSubmit} className="form-inline justify-content-center">
          <div className="form-group mx-2">
            <label htmlFor="from" className="sr-only">From</label>
            <select
              id="from"
              className="form-control"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="form-group mx-2">
            <label htmlFor="to" className="sr-only">To</label>
            <select
              id="to"
              className="form-control"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            >
              {locations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="form-group mx-2">
            <label htmlFor="date" className="sr-only">Date</label>
            <select
              id="date"
              className="form-control"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            >
              {dates.map((dateOption, i) => (
                <option key={i} value={dateOption}>{dateOption}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-custom btn-lg mx-2">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};
