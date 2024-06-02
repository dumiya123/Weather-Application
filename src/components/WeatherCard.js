import React from 'react';
import cloudicon from '../images/cloud_bg.png';
import backgroundImg from '../images/cloud_bg.png'; // Import your background image

const WeatherCard = ({ weather, color }) => {
  if (!weather) {
    return <div className="weather-card" style={{ borderRadius: '15px' }}>Loading...</div>; // or some placeholder UI
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
    return timestamp !== 'N/A' ? new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : 'N/A';
  };

  const formatDate = (timestamp) => {
    return timestamp !== 'N/A' ? new Date(timestamp * 1000).toLocaleDateString() : 'N/A';
  };

  const kelvinToCelsius = (tempInKelvin) => {
    return tempInKelvin - 273.15; // Convert Kelvin to Celsius
  };

  const cardStyle = {
    backgroundColor: color,
    color: '#fff', // Adjust for better readability
    borderRadius: '15px', // Add this line to make borders round
    display: 'flex',
    flexDirection: 'column',
  };

  const topSectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    borderRadius: '15px 15px 0 0',
    padding: '16px',
  };

  const bottomSectionStyle = {
    backgroundColor: 'gray',
    padding: '16px',
    borderRadius: '0 0 15px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
  };

  return (
    <div className="weather-card" style={cardStyle}>
      <div className="weather-card-top" style={topSectionStyle}>
        <div className="weather-card-header">
          <h2>{name}, {country}</h2>
          <div>{formatDate(dt)}</div>
        </div>
        <div className="weather-card-body">
          <div className="main-info">
            <div className="temperature">
              <h1>{kelvinToCelsius(temp).toFixed(1)}°C</h1>
              <p>{weatherDescription}</p>
            </div>
            <div className="min-max-temp">
              <p>Temp Min: {kelvinToCelsius(temp_min).toFixed(1)}°C</p>
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
          <p>Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Visibility: {(visibility / 1000).toFixed(1)} km</p>
        </div>
        <div className="weather-wind">
          <p>Wind: {windSpeed} m/s, {windDeg}  Degree</p>
        </div>
        <div className="sun-times">
          <p>Sunrise: {formatTime(sunrise)}</p>
          <p>Sunset: {formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
