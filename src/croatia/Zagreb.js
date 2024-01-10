import React from "react";
import "./Zagreb.css";
import zagrebImage from "../images/zagreb-canva.png";
import BackButton from "../back-button/Back-button";

const Zagreb = () => {
  return (
    <div className="zagreb">
      <BackButton />
      <div className="zagreb-image">
        <img src={zagrebImage} alt="zagreb" className="zagreb-images" />
      </div>
      <div className="zagreb-content">
        <div className="zagreb-column" id="zagreb">
          <h2>Weather: 28°C</h2>
          <h2>Flight: 2 hours 20 minutes</h2>
          <h2>Time difference: +1 hour</h2>
          <h2>Flight: Ryan air</h2>
          <h2>Hotel: Double Tree by Hilton</h2>
          <h2>Pros: Cheap, Culture, Food </h2>
          <h2> cons: No Beach </h2>
        </div>

        <div className="zagreb-column">
          <button className="zagreb-button">
            <a href="https://www.loveholidays.com/holidays/?destinationIds=1020&departureAirports=LON&nights=3&rooms=2&date=2024-07-05&flexibility=0&sort=POPULAR&f.boardBasis=BB&f.pools=Indoor%20Pool" target="_blank" rel="noreferrer"> View Search results </a>
          </button>

          <div>
            <button className="zagreb-button">
              <a href="https://uk.hotels.com/go/croatia/things-to-do-zagreb" target="_blank" rel="noreferrer">Things to do in Zagreb</a>
            </button>
            <br />
            <button className="zagreb-button">
              <a href="https://www.tripadvisor.co.uk/Hotel_Review-g294454-d3372267-Reviews-DoubleTree_by_Hilton_Zagreb-Zagreb_Central_Croatia.html" target="_blank" rel="noreferrer">Hotel Review</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zagreb;
