import React, { useState, useEffect, useCallback } from "react";
import Slider from "./container/Slider";
import Header from "./container/Header";
import { getWeather } from "./utils/getWeather";
import { initWeather } from "./utils/data";
require("dotenv").config();

function App() {
  const [data, setData] = useState(initWeather);
  const [city, setCity] = useState("PARIS");
  const [weather, setWeather] = useState("sun");

  const getInfo = useCallback(city => {
    getWeather(city).then(({ location, info, weather }) => {
      setData({ location, info });
      setWeather(weather);
    });
  }, []);

  useEffect(() => {
    getInfo("PARIS");
  }, [getInfo]);

  return (
    <React.Fragment>
      <img id="background" src={`/img/${weather}.jpg`} alt={weather} />
      <div id="app">
        <Header city={city} data={data.location} />
        <Slider data={data} setCity={setCity} city={city} getInfo={getInfo} />
      </div>
    </React.Fragment>
  );
}

export default App;
