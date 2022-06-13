//TS
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

//REDUX
import { Dispatch } from "redux";

export const setCurrentCoordinates = (data: { lat: number; lon: number }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_COORDINATES,
      payload: data,
    });
  };
};

export const setOpenForecast = (data: Object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_OPEN_FORECAST,
      payload: data,
    });
  };
};

export const setCurrentActiveView = (data: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: "SET_ACTIVE_VIEW",
      payload: data,
    });
  };
};

export const setLocationData = (data: Object) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: ActionType.GET_LOCATION_DATA,
      payload: data,
    });
  };
};
