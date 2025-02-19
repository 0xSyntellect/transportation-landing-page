// src/components/header.jsx
import React from "react";
import { Booking } from "./Booking";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            {/* Header Title and Paragraph */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
              </div>
            </div>
            {/* Booking form in its own row */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <Booking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
