import { ActionType } from "../action-types";
import { Action } from "../actions/index";

interface GPSPos {
  lat: number;
  lon: number;
}

const initialState = { lat: 0, lon: 0 };

const reducer = (state: GPSPos = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_COORDINATES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
