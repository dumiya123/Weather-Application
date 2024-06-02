import React from 'react';
import cloudicon from '../images/cloud_bg.png';

const WeatherCard = ({ weather, color }) => {
  if (!weather) {
    return <div className="weather-card">Loading...</div>; // or some placeholder UI
  }

  const {
    name = 'Unknown city',
    main = {},
    weather: weatherDetails = [],
    wind = {},
    sys = {},
    dt,
    visibility = 0,
  } = weather;

  const {
    temp = 'N/A',
    temp_min = 'N/A',
    temp_max = 'N/A',
    pressure = 'N/A',
    humidity = 'N/A',
  } = main;

  const weatherDescription = weatherDetails.length > 0 ? weatherDetails[0].description : 'N/A';
  const windSpeed = wind.speed || 'N/A';
  const windDeg = wind.deg || 'N/A';
  const country = sys.country || 'N/A';
  const sunrise = sys.sunrise || 'N/A';
  const sunset = sys.sunset || 'N/A';

  const formatTime = (timestamp) => {
    return timestamp !== 'N/A' ? new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';
  };

  const formatDate = (timestamp) => {
    return timestamp !== 'N/A' ? new Date(timestamp * 1000).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'N/A';
  };

  const kelvinToCelsius = (tempInKelvin) => {
    return tempInKelvin - 273.15; // Convert Kelvin to Celsius
  };

  const cardStyle = {
    backgroundColor: color,
    color: '#ffffff' // ensuring text is visible on background
  };

  return (
    <div className="weather-card" style={cardStyle}>
      <div className="weather-card-upper">
        <div className="weather-card-header">
          <h2>{name}, {country}</h2>
          <button className="close-btn">&times;</button>
        </div>
        <div className="weather-card-main">
          <div className="temperature">
            <h3>{kelvinToCelsius(temp).toFixed(1)}°C</h3>
            <p>{weatherDescription}</p>
          </div>
          <div className="min-max-temp">
            <p>Temp Min: {kelvinToCelsius(temp_min).toFixed(1)}°C</p>
            <p>Temp Max: {kelvinToCelsius(temp_max).toFixed(1)}°C</p>
          </div>
          <div className="weather-icon">
            <img src={cloudicon} alt="Weather Icon" />
          </div>
        </div>
      </div>
      <div className="weather-card-lower">
        <div className="weather-details">
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
          <p>Wind: {windSpeed} m/s, {windDeg}°</p>
          <p>Sunrise: {formatTime(sunrise)}</p>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
