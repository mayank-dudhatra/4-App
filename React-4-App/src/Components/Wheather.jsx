import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "f218e290dc7aeb9145768ac9f416c306";
  const LAT = 22.817167;
  const LON = 72.473778;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
