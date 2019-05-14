import get from 'lodash/get';
import { TOKEN } from './constants';
import { capitalize } from './helpers';

export const getWeatherByCoords = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${TOKEN}`;
  return fetch(url)
    .then(response => response.json().then((jsonResponse) => {
      const { weather, main, wind, name } = jsonResponse;
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }
      return ({
        city: name,
        windSpeed: Math.round(wind.speed),
        humidity: Math.round(main.humidity),
        maxTemp: main.temp_max,
        minTemp: main.temp_min,
        title: weather[0].main,
        icon: weather[0].icon,
        pressure: get(main, 'pressure') || 0,
        description: capitalize(weather[0].description),
        temp: main.temp > 0 ? Math.round(main.temp) : Math.round(main.temp),
      });
    }));
};

export const getWeatherByCity = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${TOKEN}`;
  return fetch(url)
    .then(response => response.json().then((jsonResponse) => {
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }
      const { weather, main, wind, name } = jsonResponse;
      return ({
        city: name,
        windSpeed: Math.round(wind.speed),
        humidity: Math.round(main.humidity),
        maxTemp: main.temp_max,
        minTemp: main.temp_min,
        title: weather[0].main,
        icon: weather[0].icon,
        pressure: get(main, 'pressure') || 0,
        description: capitalize(weather[0].description),
        temp: main.temp > 0 ? `+${Math.round(main.temp)}` : Math.round(main.temp),
      });
    }));
};
