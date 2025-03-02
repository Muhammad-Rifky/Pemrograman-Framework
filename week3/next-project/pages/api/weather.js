const fetchWeather = async (city) => {
  const apiKey = '802cecab84c2c09324d9df81d94094de';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(`Weather data for ${city}:`, data);
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
  }
};

const fetchWeatherForCities = async (cities) => {
  for (const city of cities) {
    await fetchWeather(city);
  }
};

// List of cities to fetch weather data for
const cities = ['Jakarta', 'New York', 'London', 'Tokyo', 'Sydney'];

// Fetch weather data for all cities
fetchWeatherForCities(cities);