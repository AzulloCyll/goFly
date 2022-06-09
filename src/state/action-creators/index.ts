//TS
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

//REDUX
import { Dispatch } from "redux";

export const setWeather = (data: Object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ACTUAL_WEATHER,
      payload: data,
    });
  };
};

export const setCurrentCoordinates = (data: { lat: number; lon: number }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_COORDINATES,
      payload: data,
    });
  };
};

export const setForecast = (data: Object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_FORECAST,
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
