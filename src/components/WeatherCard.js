import React from "react";
import cloudicon from "../images/cloud_bg.png";
import backgroundImg from "../images/cloud_bg.png"; // Import your background image

const WeatherCard = ({ weather, color }) => {
  if (!weather) {
    return (
      <div className="weather-card" style={{ borderRadius: "15px" }}>
        Loading...
      </div>
    ); // or some placeholder UI
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
    return timestamp !== "N/A"
      ? new Date(timestamp * 1000).toLocaleDateString()
      : "N/A";
  };

  const kelvinToCelsius = (tempInKelvin) => {
    return tempInKelvin - 273.15; // Convert Kelvin to Celsius
  };

  const cardStyle = {
    backgroundColor: color,
    color: "#fff", // Adjust for better readability
    borderRadius: "15px", // Add this line to make borders round
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };

  const topSectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    borderRadius: "15px 15px 0 0",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    gap: "1px", // Set gap between the sections
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

  return (
    <div className="weather-card" style={cardStyle}>
      <div className="weather-card-top" style={topSectionStyle}>
        {/* Left Section */}
        <div className="left-top-section" style={{ marginRight: "5px" }}>
          {" "}
          {/* Adjust margin-right */}
          <div className="weather-card-header">
            <h2>
              <br></br>
              {name},{country}{" "}
            </h2>
            <br></br>
            {formatTime(dt)}, {formatDate(dt)}
            <br></br>
            <div>
              <br></br>
              {weatherDescription}
            </div>
            <br></br>
          </div>
        </div>
        {/* Add a vertical white line */}
        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "white",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        ></div>{" "}
        {/* Adjust margins */}
        {/* Right Section */}
        <div className="right-top-section" style={{ marginLeft: "5px" }}>
          {" "}
          {/* Adjust margin-left */}
          <div className="main-info" style={{maxWidth: '300px'}}>
            <div className="temperature">
              <br></br>
              <h1>{kelvinToCelsius(temp).toFixed(1)}°C</h1>
            </div>
            <div className="min-max-temp">
              <br></br>
              <p>Temp Min: {kelvinToCelsius(temp_min).toFixed(1)}°C</p>
              <br></br>
              <p>Temp Max: {kelvinToCelsius(temp_max).toFixed(1)}°C</p>
            </div>
          </div>
          <div className="weather-icon">
            <img src={cloudicon} alt="Weather Icon" />
          </div>
        </div>
      </div>

      <div className="weather-card-bottom" style={bottomSectionStyle}>
        <div className="weather-details">
          <br></br>
          <p>Pressure: {pressure} hPa</p>
          <br></br>
          <p>Humidity: {humidity}%</p>
          <br></br>
          <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
          <br></br>
        </div>
        <div className="weather-wind">
          <p>
            {windSpeed} m/s, {windDeg} Degree
          </p>
        </div>
        <div className="sun-times">
          <p>Sunrise: {formatTime(sunrise)}</p>
          <br></br>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
