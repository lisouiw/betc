import React from "react";
import { data } from "../utils/data";

const Slide = ({ type, text, unit, info, icon, deg }) => {
  let Icon = icon;
  deg = type === "speed" ? deg : 0;

  return (
    <div className="slide align-center">
      <div style={{ padding: "5px" }}>
        <div className="slide-info">
          <Icon style={{ transform: `rotate(${deg}deg)`, maxWidth: "30%" }} />
          <div className="slide-info">
            {info} {unit}
          </div>
        </div>
        <p className="slide-text">{text}</p>
      </div>
    </div>
  );
};

function Information(info) {
  return (
    <div id="information">
      {data.map((value, i) => {
        return (
          <Slide {...value} info={info[value.type]} deg={info.deg} key={i} />
        );
      })}
    </div>
  );
}

export default Information;
