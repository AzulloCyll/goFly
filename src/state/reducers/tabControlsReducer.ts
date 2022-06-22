import { ActionType } from "../action-types";
import { Action } from "../actions/index";

interface Controls {
  activeValue: number;
}

const initialState = {
  activeValue: 0,
};

const reducer = (state: Controls = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_VIEW:
      return { ...state, activeValue: action.payload };

    default:
      return state;
  }
};

export default reducer;
