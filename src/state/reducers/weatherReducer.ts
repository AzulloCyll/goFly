import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = {};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ACTUAL_WEATHER:
      return { ...state, ...action.payload };
    case ActionType.GET_FORECAST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
