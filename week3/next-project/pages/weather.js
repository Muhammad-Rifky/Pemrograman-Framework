import { useEffect, useState } from 'react';

const fetchWeather = async (city) => {
  const apiKey = '802cecab84c2c09324d9df81d94094de';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return { city, data };
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    return { city, error: error.message };
  }
};

const fetchWeatherForCities = async (cities) => {
  const weatherData = [];
  for (const city of cities) {
    const data = await fetchWeather(city);
    weatherData.push(data);
  }
  return weatherData;
};

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ['Jakarta', 'New York', 'London', 'Tokyo', 'Sydney'];

  useEffect(() => {
    fetchWeatherForCities(cities).then(setWeatherData);
  }, []);

  return (
    <div id="weather-container">
      {weatherData.map(({ city, data, error }) => (
        <div key={city} className="city-weather">
          {error ? (
            <>
              <h2>{city}</h2>
              <p>Error: {error}</p>
            </>
          ) : (
            <>
              <h2>{city}</h2>
              <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
              <p>Weather: {data.weather[0].description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeatherPage;