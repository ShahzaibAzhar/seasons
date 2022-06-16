import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "Burr Its cold",
    icon: "snowflake",
  },
  summer: {
    text: "Lets hit the beach",
    icon: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(
    props.lat,
    //new Date().getMonth()
    4
  );

  const { text, icon } = seasonConfig[season];

  return (
    <div className={`msg ${season}`}>
      <i className={`leftIcon App-logo ${icon} icon massive`} />
      <h1>{text}</h1>
      <i className={`rightIcon App-logo ${icon} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
