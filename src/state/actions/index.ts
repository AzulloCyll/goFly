import { ActionType } from "../action-types/index";

interface GetWeatherAction {
  type: ActionType.GET_ACTUAL_WEATHER;
  payload: Object;
}

interface getForecast {
  type: ActionType.GET_FORECAST;
  payload: Object;
}

interface GetLonAction {
  type: ActionType.GET_CURRENT_LON;
  payload: number;
}

interface GetLatAction {
  type: ActionType.GET_CURRENT_LAT;
  payload: number;
}

export type Action =
  | GetWeatherAction
  | GetLonAction
  | GetLatAction
  | getForecast;
