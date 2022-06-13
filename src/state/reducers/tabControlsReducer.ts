import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState = {
  activeValue: 0,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_VIEW:
      return { ...state, activeValue: action.payload };

    default:
      return state;
  }
};

export default reducer;
