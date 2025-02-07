import React, { useState } from 'react';
import Select from 'react-select';

export const Booking = () => {
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

  // Create options for react-select
  const locationOptions = locations.map(loc => ({ value: loc, label: loc }));

  const [fromLocation, setFromLocation] = useState({ value: locations[0], label: locations[0] });
  const [toLocation, setToLocation] = useState(null);
  const [travelDate, setTravelDate] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const destination = toLocation ? toLocation.value : '';
    window.location.href = `/booking?from=${encodeURIComponent(fromLocation.value)}&to=${encodeURIComponent(destination)}&date=${encodeURIComponent(travelDate)}&time=${encodeURIComponent(travelTime)}`;
  };

  // (Keep the same container and group styles as before)
  // ...

  return (
    <div id="booking" style={{ marginTop: '60px', padding: '40px 0', backgroundColor: '#f8f8f8' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Book Your Ride</h2>
        <form onSubmit={handleSubmit} style={{
          width: '90%',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '50px',
          padding: '20px 40px',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap'
        }}>
          {/* Pickup Location using react-select */}
          <div style={{ margin: '10px', flex: '1' }}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>Pickup Location</label>
            <Select
              options={locationOptions}
              value={fromLocation}
              onChange={(selectedOption) => setFromLocation(selectedOption)}
              styles={{ control: (provided) => ({ ...provided, height: '50px',width:"100%", fontSize: '1.6rem' }) }}
            />
          </div>

          {/* Destination Location using react-select for autocomplete */}
          <div style={{ margin: '10px', flex: '1' }}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>Destination Location</label>
            <Select
              options={locationOptions}
              value={fromLocation}
              onChange={(selectedOption) => setFromLocation(selectedOption)}
              styles={{
                control: (provided) => ({
                  ...provided,
                  height: '50px',
                  width:'100%',
                  minHeight: '50px',
                  fontSize: '1.6rem',
                  padding: '0 15px'
                }),
                placeholder: (provided) => ({
                  ...provided,
                  fontSize: '1.6rem'
                })
              }}            />
          </div>

          {/* Date Picker */}
          <div style={{ margin: '10px', flex: '1' }}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>Pick Up Date</label>
            <input
              type="date"
              style={{
                height: '50px',
                fontSize: '1.6rem',
                padding: '0 15px',
                width: '100%',
                fontWeight: 'bold',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>

          {/* Time Picker */}
          <div style={{ margin: '10px', flex: '1' }}>
            <label style={{ display: 'block', fontSize: '1.4rem', marginBottom: '5px' }}>Pick Up Time</label>
            <input
              type="time"
              style={{
                height: '50px',
                fontSize: '1.6rem',
                padding: '0 15px',
                width: '100%',
                fontWeight: 'bold',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
              value={travelTime}
              onChange={(e) => setTravelTime(e.target.value)}
            />
          </div>

          {/* Book Now Button */}
          <div style={{ margin: '10px', flex: '0 0 auto' }}>
            <button type="submit" className="btn btn-custom">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
