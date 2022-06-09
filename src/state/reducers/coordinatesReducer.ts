import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = {};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_COORDINATES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
