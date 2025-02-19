// src/components/Header.jsx
import React from "react";
import { Booking } from "./Booking";
import "./Header.css";
import introBg from "../img/intro-bg.png"; // Make sure intro-bg.png is in src/img/

export const Header = (props) => {
  return (
    <header
      id="header"
      style={{
        background: `url(${introBg}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="intro">
        <div className="overlay">
          <div className="container">
            {/* Header Title and Paragraph */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>{props.data ? props.data.title : "Loading"}</h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
            {/* Booking form row */}
            <div className="row">
              {/* Use a wider column to allow the booking form to expand */}
              <div className="col-md-12">
                <Booking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
