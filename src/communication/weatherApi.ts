import axios from "axios";
const KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeather = async (
  lat: number,
  lon: number,
  callback: Function
) => {
  try {
    const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${lat},${lon}&aqi=no`;
    const result = await axios.get(URL);
    callback(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const getForecast = async (
  lat: number,
  lon: number,
  callback: Function
) => {
  try {
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${lat},${lon}&aqi=no&days=4`;
    const result = await axios.get(URL);
    console.log(URL);

    callback(result.data);
  } catch (error) {
    console.log(error);
  }
};
