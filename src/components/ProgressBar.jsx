import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className={`step ${currentStep >= 1 ? "completed" : ""}`}>
          <div className="circle">1</div>
          <div className="label">Select Location</div>
        </div>

        <div className={`step ${currentStep >= 2 ? "completed" : ""}`}>
          <div className="circle">2</div>
          <div className="label">Select Vehicle</div>
        </div>

        <div className={`step ${currentStep >= 3 ? "completed" : ""}`}>
          <div className="circle">3</div>
          <div className="label">Checkout</div>
        </div>
      </div>
    </div>
  );
};
