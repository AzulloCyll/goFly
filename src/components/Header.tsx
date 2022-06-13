import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

//components
import TopNavigation from "./TopNavigation";

//utils
import { findCurrenGPSLocation } from "../communication/getGPS";
import { getOpenForecast } from "../communication/weatherApi";
import { getLocation } from "../communication/geocodingApi";

//MUI
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

//icons
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const fromRedux = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const { setCurrentCoordinates, setOpenForecast, setLocationData } =
    bindActionCreators(actionCreators, dispatch);

  const { name, country, state } = fromRedux.geoLocation ?? {};
  const stateTrimmed = state && state.split(" ")[0];
  const { lat, lon } = fromRedux.coordinates;

  const setCurrentCoords = () => {
    findCurrenGPSLocation(setCurrentCoordinates);
    getOpenForecast(lat, lon, setOpenForecast);
    getLocation(lat, lon, setLocationData);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 5000,
      }}
    >
      <Paper component="form" sx={{ borderRadius: 0 }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {name && country && (
          <span>{`${name}, ${stateTrimmed}, ${country}`}</span>
        )}
        <IconButton sx={{ float: "right" }} onClick={setCurrentCoords}>
          <ModeStandbyOutlinedIcon />
        </IconButton>
      </Paper>

      <nav>
        <TopNavigation />
      </nav>
    </Paper>
  );
}
