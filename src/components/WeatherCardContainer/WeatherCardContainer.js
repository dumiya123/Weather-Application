import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';

const WeatherCardContainer = ({ weatherData }) => {
  const [selectedWeather, setSelectedWeather] = useState(null);

  const handleCardClick = (weather) => {
    setSelectedWeather(weather);
  };

  const handleBackClick = () => {
    setSelectedWeather(null);
  };

  return (
    <div>
      {selectedWeather ? (
        <WeatherDetails weather={selectedWeather} onBack={handleBackClick} />
      ) : (
        <div className="weather-card-list">
          {weatherData.map((weather, index) => (
            <WeatherCard
              key={index}
              weather={weather}
              color="#3a86ff" // You can dynamically change this if needed
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherCardContainer;
