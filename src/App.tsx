import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";

//utils
import { getOpenForecast } from "./communication/weatherApi";
import { findCurrenGPSLocation } from "./communication/getGPS";
import { getLocation } from "./communication/geocodingApi";

//components
import Header from "./components/Header";
import FooterNavigation from "./components/FooterNavigation";
import SwipableVievs from "./components/SwipableVievs";

//MUI
import Container from "@mui/material/Container";

export default function App() {
  const dispatch = useDispatch();
  const {
    setCurrentCoordinates,
    setOpenForecast,
    setLocationData,
    setSlicedHourly,
  } = bindActionCreators(actionCreators, dispatch);

  const fromRedux = useSelector((state: State) => state);
  const { lat, lon } = fromRedux.coordinates;

  useEffect(() => {
    if (lat && lon) {
      getOpenForecast(lat, lon, setOpenForecast, setSlicedHourly);
      getLocation(lat, lon, setLocationData);
    } else findCurrenGPSLocation(setCurrentCoordinates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  const styles = {
    container: {
      overflow: "auto",
      height: "100vh",
      zIndex: 1,
      margin: 0,
      padding: 0,
    },
  };

  return (
    <div className="App">
      <Header />

      <main>
        <Container sx={{ ...styles.container }}>
          <SwipableVievs />
        </Container>
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </div>
  );
}
