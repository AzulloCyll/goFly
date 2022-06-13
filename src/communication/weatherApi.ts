import axios from "axios";
const KEY2 = process.env.REACT_APP_WEATHER_API_KEY2;

export const getOpenForecast = async (
  lat: number,
  lon: number,
  callback: Function
) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY2}&units=metric`;
    const result = await axios.get(URL);
    callback(result.data);
  } catch (error) {
    console.error(error);
  }
};
