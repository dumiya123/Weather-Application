import React from 'react';
import cloudIcon from '../WeatherCard/images/cloud_bg.png'; // Update the path as necessary

const WeatherDetails = ({ weather, onBack }) => {
  if (!weather) {
    return <p>No weather data available.</p>;
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

  const weatherDescription = weatherDetails.length > 0 ? weatherDetails[0].description : "N/A";
  const windSpeed = wind.speed || "N/A";
  const windDeg = wind.deg || "N/A";
  const country = sys.country || "N/A";
  const sunrise = sys.sunrise || "N/A";
  const sunset = sys.sunset || "N/A";

  const formatTime = (timestamp) => {
    return timestamp !== "N/A"
      ? new Date(timestamp * 1000).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      : 'N/A';
  };

  const kelvinToCelsius = (tempInKelvin) => {
    return tempInKelvin - 273.15; // Convert Kelvin to Celsius
  };

  const detailsCardStyle = {
    backgroundColor: "#3a86ff", // Adjust this based on your theme
    color: "#fff",
    borderRadius: "15px",
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const backButtonStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  };

  return (
    <div style={detailsCardStyle}>
      <button style={backButtonStyle} onClick={onBack}>
        ←
      </button>
      <img src={cloudIcon} alt="Weather Icon" style={iconStyle} />
      <h2>{name}, {country}</h2>
      <p>{formatTime(dt)}, {new Date(dt * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
      <h3>{weatherDescription}</h3>
      <h1>{kelvinToCelsius(temp).toFixed(1)}°C</h1>
      <p>Temp Min: {kelvinToCelsius(temp_min).toFixed(1)}°C | Temp Max: {kelvinToCelsius(temp_max).toFixed(1)}°C</p>
      
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", backgroundColor: "#2d3345", padding: "15px", borderRadius: "10px" }}>
        <div>
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
        </div>
        <div>
          <p>{windSpeed} m/s {windDeg}°</p>
          <img src={cloudIcon} alt="Wind Icon" style={iconStyle} /> {/* Replace with wind icon */}
        </div>
        <div>
          <p>Sunrise: {formatTime(sunrise)}</p>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
