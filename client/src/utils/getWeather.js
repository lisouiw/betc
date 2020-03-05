import axios from "axios";
import { initWeather } from "../utils/data";

export const getWeather = async city => {
  return await axios
    .get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        units: "metric",
        appid: process.env.REACT_APP_APPID
      }
    })
    .then(({ data }) => ({
      location: {
        temp: data.main.temp,
        coord: data.coord
      },
      info: {
        temp: data.main.temp,
        speed: data.wind.speed,
        deg: data.wind.deg,
        humidity: data.main.humidity,
        pressure: data.main.pressure
      },
      weather: data.weather[0].main === "Rain" ? "rain" : "sun"
    }))
    .catch(() => initWeather);
};
