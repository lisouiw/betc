import React from "react";

const Meteo = ({ lon, lat }) => (
  <div id="meteo">
    <div>Météo</div>
    <div>
      ( {lon} ; {lat} )
    </div>
  </div>
);

const CityWeather = ({ city, temp }) => (
  <div id="city-weather">
    <div id="city">{city}</div>
    <div id="temp">{temp}°C</div>
  </div>
);

const Header = ({ city, data }) => (
  <React.Fragment>
    <Meteo {...data.coord} />
    <CityWeather city={city} temp={data.temp} />
  </React.Fragment>
);

export default Header;
