import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

//utils
import { getForecast, getWeather } from "./communication/weatherApi";
import { findCurrenGPSLocation } from "./communication/getGPS";

//components
import TopNavigation from "./components/TopNavigation";
import FooterNavigation from "./components/FooterNavigation";
import SwipableVievs from "./components/SwipableVievs";

//MUI
import Container from "@mui/material/Container";

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

  return (
    <div className="App">
      <header>
        <form></form>
        <nav>
          <TopNavigation />
        </nav>
      </header>

      <main>
        <Container
          maxWidth="xs"
          sx={{
            overflow: "auto",
            height: "100vh",
            zIndex: 1,
            margin: 0,
            padding: 0,
          }}
        >
          <SwipableVievs />
        </Container>
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </div>
  );
}
