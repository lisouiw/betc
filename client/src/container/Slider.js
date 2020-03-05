import React from "react";
import Information from "../component/Information";
import DateHeader from "../component/DateHeader";
import Dropdown from "./Dropdown";

const Slider = ({ data, setCity, city, getInfo }) => (
  <div id="slider">
    <DateHeader city={city} />
    <Information {...data.info} />
    <Dropdown setCity={setCity} city={city} getInfo={getInfo} />
  </div>
);

export default Slider;
