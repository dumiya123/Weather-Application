import React, { useState } from "react";
import cloudicon from "..//WeatherCard/images/cloud_bg.png";

const WeatherCard = ({ weather, color, onCardClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!weather || !isVisible) {
    return null;
  }

  const {
    name = "Unknown city",
    main = {},
    weather: weatherDetails = [],
    wind = {},
    sys = {},
    dt,
    visibility = 0,
  } = weather;

  const {
    temp = "N/A",
    temp_min = "N/A",
    temp_max = "N/A",
    pressure = "N/A",
    humidity = "N/A",
  } = main;

  const weatherDescription =
    weatherDetails.length > 0 ? weatherDetails[0].description : "N/A";
  const windSpeed = wind.speed || "N/A";
  const windDeg = wind.deg || "N/A";
  const country = sys.country || "N/A";
  const sunrise = sys.sunrise || "N/A";
  const sunset = sys.sunset || "N/A";

  const formatTime = (timestamp) => {
    return timestamp !== "N/A"
      ? new Date(timestamp * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "N/A";
  };

  const formatDate = (timestamp) => {
    if (timestamp !== "N/A") {
      const date = new Date(timestamp * 1000);
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${month} ${day}`;
    } else {
      return "N/A";
    }
  };

  const kelvinToCelsius = (tempInKelvin) => {
    return tempInKelvin - 273.15;
  };

  const cardStyle = {
    backgroundColor: color,
    color: "#fff",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer" // Indicates that the card is clickable
  };

  const topSectionStyle = {
    backgroundImage: `url(${cloudicon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px 15px 0 0",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "3px",
  };

  const bottomSectionStyle = {
    backgroundColor: "gray",
    padding: "16px",
    borderRadius: "0 0 15px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  };

  return (
    <div
      className="weather-card"
      style={cardStyle}
      onClick={onCardClick} // Trigger click event when the card is clicked
    >
      <button
        style={closeButtonStyle}
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click from triggering the card's onClick
          setIsVisible(false);
        }}
      >
        X
      </button>

      <div className="weather-card-top" style={topSectionStyle}>
        <div className="left-top-section" style={{ marginRight: "5px" }}>
          <div className="weather-card-header">
            <h2>
              <br />
              {name}, {country}
            </h2>
            <br />
            {formatTime(dt)}, {formatDate(dt)}
            <br />
            <div>
              <br />
              {weatherDescription}
            </div>
            <br />
          </div>
        </div>

        <div className="right-top-section" style={{ marginLeft: "5px" }}>
          <div className="main-info" style={{ maxWidth: "300px" }}>
            <div className="temperature">
              <br />
              <h1>{kelvinToCelsius(temp).toFixed(1)} °C</h1>
            </div>
            <div className="min-max-temp">
              <br />
              <p>Temp Min : {kelvinToCelsius(temp_min).toFixed(1)}°C</p>
              <br />
              <p>Temp Max : {kelvinToCelsius(temp_max).toFixed(1)}°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-card-bottom" style={bottomSectionStyle}>
        <div className="weather-details" style={{ flex: 1 }}>
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
        </div>

        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "white",
          }}
        ></div>

        <div className="weather-wind" style={{ flex: 1, textAlign: "center" }}>
          <p>
            {windSpeed} m/s, {windDeg} Degree
          </p>
        </div>

        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "white",
          }}
        ></div>

        <div className="sun-times" style={{ flex: 1, textAlign: "right" }}>
          <p>Sunrise: {formatTime(sunrise)}</p>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
