import { ActionType } from "../action-types/index";

interface GetWeatherAction {
  type: ActionType.GET_ACTUAL_WEATHER;
  payload: Object;
}

interface getForecast {
  type: ActionType.GET_FORECAST;
  payload: Object;
}

interface GetCoordinatesAction {
  type: "SET_COORDINATES";
  payload: { lat: number; lon: number };
}

export type Action = GetWeatherAction | getForecast | GetCoordinatesAction;
