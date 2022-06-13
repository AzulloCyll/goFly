import axios from "axios";

const KEY2 = process.env.REACT_APP_WEATHER_API_KEY2;

export const getLocation = async (
  lat: number,
  lon: number,
  callback: Function
) => {
  try {
    const URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${KEY2}`;
    const result = await axios.get(URL);
    callback(result.data[0]);
  } catch (error) {
    console.error(error);
  }
};
