import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { useEffect } from "react";
import { getForecast, getWeather } from "./communication/weatherApi";
import { findCurrenGPSLocation } from "./communication/getGPS";
import { bindActionCreators } from "@reduxjs/toolkit";

export default function App() {
  const dispatch = useDispatch();
  const { setWeather, setCurrentLat, setCurrentLon, setForecast } =
    bindActionCreators(actionCreators, dispatch);

  const fromRedux = useSelector((state: State) => state);
  const { lat, lon } = fromRedux.coordinates;

  useEffect(() => {
    if (lat && lon) {
      getWeather(lat, lon, setWeather);
      getForecast(lat, lon, setForecast);
    } else findCurrenGPSLocation(setCurrentLat, setCurrentLon);
  }, [lat, lon]);

  console.log(fromRedux.weather.data);

  return (
    <div className="App">
      <p>
        {fromRedux.weather.data?.location.name},{" "}
        {fromRedux.weather.data?.location.country}, Lat:{" "}
        {fromRedux.coordinates.lat}, Lon: {fromRedux.coordinates.lon}
      </p>
      <img src={fromRedux.weather.data?.current.condition.icon} alt="" />
      <p>{fromRedux.weather.data?.current.condition.text}</p>
      <p>
        Wind: {fromRedux.weather.data?.current.wind_kph} km/h, Gust:{" "}
        {fromRedux.weather.data?.current.gust_kph} km/h
      </p>

      <p>{fromRedux.weather.data?.forecast?.forecastday[2].day.maxtemp_c}</p>
    </div>
  );
}
