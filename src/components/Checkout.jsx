// src/components/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import "./Checkout.css";

export const Checkout = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const fromLocation = params.get("from") || "";
  const toLocation = params.get("to") || "";
  const vehicleType = params.get("vehicle") || "";

  const [passengerName, setPassengerName] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the booking data to an API.
    console.log("Booking submitted", {
      fromLocation,
      toLocation,
      vehicleType,
      passengerName,
      passengerEmail,
      passengerPhone
    });
    alert("Booking complete!");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <ProgressBar currentStep={3} />
      <div className="booking-summary">
        <h2>Confirm Your Booking</h2>
        <p>
          <strong>From:</strong> {fromLocation}
        </p>
        <p>
          <strong>To:</strong> {toLocation}
        </p>
        <p>
          <strong>Vehicle:</strong> {vehicleType}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={passengerEmail}
            onChange={(e) => setPassengerEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={passengerPhone}
            onChange={(e) => setPassengerPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="complete-booking-btn">
          Complete Booking
        </button>
      </form>
    </div>
  );
};
