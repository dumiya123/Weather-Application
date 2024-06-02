// src/utils/fetchWeatherData.js

const cache = {};

const fetchWeatherData = async (query) => {
  const apiKey = '4fedbbf886b1618f65bf1827d8d360dc';
  const cacheKey = typeof query === 'string' ? query : query.join(',');

  // Check if the data is already in cache and not expired
  if (cache[cacheKey] && (Date.now() - cache[cacheKey].timestamp < 5 * 60 * 1000)) {
    return cache[cacheKey].data;
  }

  const endpoint = typeof query === 'string'
    ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
    : `https://api.openweathermap.org/data/2.5/group?id=${query.join(',')}&appid=${apiKey}`;

  const response = await fetch(endpoint);
  const data = await response.json();
  const result = typeof query === 'string' ? [data] : data.list;

  // Store the data in the cache
  cache[cacheKey] = {
    data: result,
    timestamp: Date.now()
  };

  return result;
};

export default fetchWeatherData;
