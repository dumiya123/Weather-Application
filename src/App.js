import React, { useEffect, useState } from "react";
import fetchWeatherData from "../src/utils/fetchWeatherData";
import WeatherCard from "./components/WeatherCard";
import Footer from "../src/components/footer";
import "./App.css";
import sunICon from "../src/images/sun.png"

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [cardColors, setCardColors] = useState({});

  const cityIds = ["2643743", "5128581", "1850147", "2147714"]; // Example city IDs

  useEffect(() => {
    const getWeatherData = async () => {
      const data = await fetchWeatherData(cityIds);
      setWeatherData(data);
      assignColors(data); // Assign colors for the initial weather cards
    };

    getWeatherData();
  }, []);

  const assignColors = (data) => {
    const newCardColors = {};
    data.forEach((city) => {
      newCardColors[city.id] = getRandomColor();
    });
    setCardColors(newCardColors);
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = async () => {
    if (!cityName) return;
    try {
      const newCityData = await fetchWeatherData(cityName);
      setWeatherData((prevData) => [...prevData, ...newCityData]);
      setCityName("");
      setCardColors((prevColors) => ({
        ...prevColors,
        [newCityData[0].id]: getRandomColor()
      }));
    } catch (error) {
      console.error("Error fetching data for city:", cityName, error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  };

  return (
    <div className="app">
      <h1 className="title">
      <img src={sunICon} alt="Weather Icon" className="weather-icon" /> {/* Add the icon here */}
        Weather App</h1>
      <br />
      <br />
      <div>
        <input
          className="input"
          type="  text"
          placeholder="   Enter the city name"
          value={cityName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="button" onClick={handleSearch}>
          Add City
        </button>
        <br />
        <br />
      </div>

      <div className="weather-cards-container">
        {weatherData.map((weather, index) => (
          <WeatherCard
            key={index}
            weather={weather}
            color={cardColors[weather.id] || getRandomColor()}
          />
        ))}
      </div>
      <p></p>
      <p></p>
      <div>

        <Footer/>


      </div>

    </div>
  );
};

export default App;
