import axios from "axios";
const KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = async (
  lat: number,
  lon: number,
  callback: Function
) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${lat},${lon}&aqi=no`;
  const weather = await axios.get(URL);

  callback(weather.data);
};
