// src/components/BookingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import "./BookingPage.css"; // <-- Import your new CSS file here

export const BookingPage = () => {
  // Retrieve query parameters
  const params = new URLSearchParams(window.location.search);
  const fromLocation = params.get("from") || "N/A";
  const toLocation = params.get("to") || "N/A";
  const travelDate = params.get("date") || "N/A";

  // Data for the vehicle categories
  const vehicleCategories = [
    {
      type: "Sedan",
      pax: "Up to 4 pax",
      price: "$50",
      img: "img/vehicles/sedan.jpeg",
    },
    {
      type: "Minivan",
      pax: "Up to 6 pax",
      price: "$80",
      img: "img/vehicles/minivan.jpeg",
    },
    {
      type: "Sprinter",
      pax: "Up to 10 pax",
      price: "$120",
      img: "img/vehicles/sprinter.png",
    },
  ];

  const navigate = useNavigate();

  // When user clicks "Select", go to Checkout route
  const handleSelectVehicle = (vehicle) => {
    navigate(
      `/checkout?from=${encodeURIComponent(fromLocation)}&to=${encodeURIComponent(
        toLocation
      )}&vehicle=${encodeURIComponent(vehicle.type)}`
    );
  };

  return (
    <div>
      {/* Top summary section */}
      <div className="bookingpage-summary">
        <h2>Your Booking Details</h2>
        <p>
          <strong>From:</strong> {fromLocation}
        </p>
        <p>
          <strong>To:</strong> {toLocation}
        </p>
        <p>
          <strong>Date:</strong> {travelDate}
        </p>
      </div>

      {/* Step 2 progress bar */}
      <div className="bookingpage-progressbar">
        <ProgressBar currentStep={2} />
      </div>

      {/* Vehicle selection grid */}
      <div className="vehicle-selection">
        <h2>Select Your Vehicle</h2>
        <div className="vehicle-cards-container">
          {vehicleCategories.map((vehicle, index) => (
            <div key={index} className="vehicle-card">
              <img src={vehicle.img} alt={vehicle.type} className="vehicle-img" />
              <h3>{vehicle.type}</h3>
              <p>{vehicle.pax}</p>
              <p>
                <strong>Price:</strong> {vehicle.price}
              </p>
              <button onClick={() => handleSelectVehicle(vehicle)}>Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
