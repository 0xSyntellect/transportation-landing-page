// src/components/BookingPage.jsx
import React from 'react';

export const BookingPage = () => {
  // Retrieve query parameters using URLSearchParams:
  const params = new URLSearchParams(window.location.search);
  const fromLocation = params.get('from') || 'N/A';
  const toLocation = params.get('to') || 'N/A';
  const travelDate = params.get('date') || 'N/A';

  // Data for the three vehicle categories:
  const vehicleCategories = [
    {
      type: 'Sedan',
      pax: 'Up to 4 pax',
      price: '$50',
      img: 'img/vehicles/sedan.jpeg' // Place an image in public/img/vehicles/sedan.jpg
    },
    {
      type: 'Minivan',
      pax: 'Up to 6 pax',
      price: '$80',
      img: 'img/vehicles/minivan.jpeg' // Place an image in public/img/vehicles/minivan.jpg
    },
    {
      type: 'Sprinter',
      pax: 'Up to 10 pax',
      price: '$120',
      img: 'img/vehicles/sprinter.png' // Place an image in public/img/vehicles/large-sedan.jpg
    }
  ];

  // Inline styles for simplicity:
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '400px'
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0'
  };

  return (
    <div>
      {/* Upward section with the selected booking details */}
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' ,marginTop:'20px'}}>
        <h2>Your Booking Details</h2>
        <p><strong>From:</strong> {fromLocation}</p>
        <p><strong>To:</strong> {toLocation}</p>
        <p><strong>Date:</strong> {travelDate}</p>
      </div>

      {/* Vehicle category selection */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Select Your Vehicle</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {vehicleCategories.map((vehicle, index) => (
            <div key={index} style={cardStyle}>
              <img src={vehicle.img} alt={vehicle.type} style={imgStyle} />
              <h3>{vehicle.type}</h3>
              <p>{vehicle.pax}</p>
              <p><strong>Price:</strong> {vehicle.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
