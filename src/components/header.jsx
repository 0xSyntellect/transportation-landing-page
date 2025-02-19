// src/components/header.jsx
import React from "react";
// Import the Booking component
import { Booking } from "./Booking";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>

                {/* 
                  Embed the booking form here. 
                  If you also have <Booking /> in App.jsx (on the same route), 
                  remove it there to avoid a duplicate form.
                */}
                <Booking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
