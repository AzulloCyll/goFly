import { ActionType } from "../action-types/index";

interface GetCoordinatesAction {
  type: ActionType.SET_COORDINATES;
  payload: { lat: number; lon: number };
}

interface GetOpenForecastAction {
  type: ActionType.GET_OPEN_FORECAST;
  payload: Object;
}

interface GetLocationDataAction {
  type: ActionType.GET_LOCATION_DATA;
  payload: object;
}

interface GetActiveViewAction {
  type: ActionType.SET_ACTIVE_VIEW;
  payload: number;
}

export type Action =
  | GetCoordinatesAction
  | GetOpenForecastAction
  | GetLocationDataAction
  | GetActiveViewAction;
