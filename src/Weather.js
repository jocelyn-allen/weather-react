import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Birmingham",
    date: "Thursday 20:30",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    temperature: 10,
    humidity: 50,
    wind: 20
  };

  return (
    <div className="App">
      <div className="Weather">
        <form className="mt-2 mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city name"
                className="form-control"
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary w-100"
              />
            </div>
          </div>
        </form>
        <div className="weather-overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <i>
                Last updated: {weatherData.date}
                <span />
              </i>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-5 humidity-and-wind">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li className="wind-li">
                Wind: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <small>
        <a
          href="https://github.com/jocelyn-allen/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Jocelyn Allen
      </small>
    </div>
  );
}