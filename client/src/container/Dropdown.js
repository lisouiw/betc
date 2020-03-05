import React, { useState, useEffect } from "react";
import Select from "../component/Select";
import { dropdownState } from "../utils/dropdownState";

const Dropdown = ({ setCity, city, getInfo }) => {
  const [open, setOpen] = useState("drop");
  const resize = async () => {
    dropdownState(open);
  };

  const onCity = newCity => {
    if (city !== newCity) {
      setCity(newCity);
      getInfo(newCity);
    }
    setOpen("drop");
  };

  const onOpen = () => {
    setOpen(open === "drop-open" ? "drop" : "drop-open");
  };

  useEffect(() => {
    window.onresize = resize;
    if (open === "drop-open") resize();
  });

  return (
    <div id="dropdown">
      <div id={open}>
        <div id="select" onClick={() => onOpen()}>
          {city}
          <i className="gg-chevron-down"></i>
        </div>
        {open !== "drop" && <Select setCity={onCity} />}
      </div>
    </div>
  );
};

export default Dropdown;
