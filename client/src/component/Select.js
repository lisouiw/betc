import React from "react";
import { cities } from "../utils/data";

const Select = ({ setCity }) => (
  <div id="option">
    {cities &&
      cities.map((city, i) => (
        <div className="option" key={i} onClick={() => setCity(city)}>
          {city}
        </div>
      ))}
  </div>
);

export default Select;
