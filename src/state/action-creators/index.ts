import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";

export const setWeather = (data: Object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ACTUAL_WEATHER,
      payload: data,
    });
  };
};

export const setCurrentLat = (data: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CURRENT_LAT,
      payload: data,
    });
  };
};

export const setCurrentLon = (data: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CURRENT_LON,
      payload: data,
    });
  };
};
