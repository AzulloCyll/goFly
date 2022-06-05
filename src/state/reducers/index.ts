import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import coordinatesReducer from "./coordinatesReducer";

const reducers = combineReducers({
  weather: weatherReducer,
  coordinates: coordinatesReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
