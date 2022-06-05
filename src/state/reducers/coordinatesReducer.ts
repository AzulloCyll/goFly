import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = {};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_LAT:
      return { ...state, lat: action.payload };
    case ActionType.GET_CURRENT_LON:
      return { ...state, lon: action.payload };
    default:
      return state;
  }
};

export default reducer;
