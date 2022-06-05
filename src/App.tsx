import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { useEffect } from "react";
import { getWeather } from "./communication/weatherApi";
import { findCurrenGPSLocation } from "./communication/getGPS";
import { bindActionCreators } from "@reduxjs/toolkit";

export default function App() {
  const dispatch = useDispatch();
  const { setWeather, setCurrentLat, setCurrentLon } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const fromRedux = useSelector((state: State) => state);
  const { lat, lon } = fromRedux.coordinates;

  useEffect(() => {
    if (!lat && !lon) {
      findCurrenGPSLocation(setCurrentLat, setCurrentLon);
    }
    if (lat && lon) {
      getWeather(lat, lon, setWeather);
    }
  }, [lat, lon]);

  return <div className="App">{fromRedux.weather.data?.location.name}</div>;
}
