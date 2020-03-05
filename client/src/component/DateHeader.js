import React from "react";
import { day, month, timeZone } from "../utils/data";

const Current = ({ newDate, curr }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {` ${day[curr].full} ${newDate.getDate()} ${month[newDate.getMonth()]}`}
    </div>
  );
};

const DateHeader = ({ city }) => {
  let zone = new Date().toLocaleString("en-US", { timeZone: timeZone[city] });
  let newDate = new Date(zone);
  let curr = newDate.getDay();

  return (
    <div id="date">
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="gg-chevron-left"></i>
        {day[(curr - 1) % 7].show}
        <p className="day">{day[(curr - 1) % 7].hidden}</p>
      </div>
      <Current newDate={newDate} curr={curr} />
      <div style={{ display: "flex", alignItems: "center" }}>
        {day[(curr + 1) % 7].show}
        <p className="day">{day[(curr + 1) % 7].hidden}</p>
        <i className="gg-chevron-right"></i>
      </div>
    </div>
  );
};

export default DateHeader;
