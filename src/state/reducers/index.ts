import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import coordinatesReducer from "./coordinatesReducer";
import tabControlsReducer from "./tabControlsReducer";

const reducers = combineReducers({
  weather: weatherReducer,
  coordinates: coordinatesReducer,
  tabControls: tabControlsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
