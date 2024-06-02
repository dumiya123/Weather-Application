// src/utils/fetchWeatherData.js
// utils/fetchWeatherData.js
const fetchWeatherData = async (query) => {
    const apiKey = '4fedbbf886b1618f65bf1827d8d360dc';
    const endpoint = typeof query === 'string'
      ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      : `https://api.openweathermap.org/data/2.5/group?id=${query.join(',')}&appid=${apiKey}`;
  
    const response = await fetch(endpoint);
    const data = await response.json();
    return typeof query === 'string' ? [data] : data.list;
  };
  
  export default fetchWeatherData;
  


