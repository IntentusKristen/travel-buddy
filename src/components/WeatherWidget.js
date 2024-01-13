import React, { useState } from "react";
import ChatbotPopover from "./ChatbotPopover";
import "./WeatherWidget.css";

export const WeatherWidget = ({ lat, lng, city, weather }) => {
    const [openChatbot, setOpenChatbot] = useState(false);
    const date = new Date();

    return (
      <>
      <div className="weather-widget-container">
        <div className="weather">
            <img src={`/icons/${weather.icon}`}/>
            <p className="temp">{weather.tempC}°</p>
          <div>
            <h1 className="current-date">{date.toDateString()}</h1>
            <p className="current-city">📍 {city}</p>
          </div>
        </div>
        <div className="weather-details-container">
          <div className="weather-details">
            <p className="weather-detail">Feels like: {weather.feelslikeC}°</p>
            <p className="weather-detail">Wind: {weather.windSpeedKPH} km/h</p>
            <p className="weather-detail">Visibility: {weather.visibilityKM} km</p>
            {/* <p className="weather-detail">Visibility: {weather.visibilityKM.toFixed(2)} km</p> */}
          </div>
          <button className="gpt-btn" onClick={() => { setOpenChatbot(true) }}>
            <img src="/icons/sparkle.png" 
              width={15} 
              style={{
                marginRight: '0.3rem',
              }}/>
            AI Assistant
          </button>
        </div>
      </div>
      {openChatbot && <ChatbotPopover onClose={() => { setOpenChatbot(false) }}/>}
      </>
  );
};
