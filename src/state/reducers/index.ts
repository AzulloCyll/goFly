import { combineReducers } from "redux";
import coordinatesReducer from "./coordinatesReducer";
import tabControlsReducer from "./tabControlsReducer";
import openWeatherReducer from "./openWeatherReducer";
import geoLocationReducer from "./geoLocationReducer";

const reducers = combineReducers({
  coordinates: coordinatesReducer,
  tabControls: tabControlsReducer,
  openWeather: openWeatherReducer,
  geoLocation: geoLocationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
