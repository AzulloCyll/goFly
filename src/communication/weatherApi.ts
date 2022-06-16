import { Today } from "@mui/icons-material";
import axios from "axios";
const KEY2 = process.env.REACT_APP_WEATHER_API_KEY2;

export const getOpenForecast = async (
  lat: number,
  lon: number,
  callback: Function,
  callback2: Function
) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY2}&units=metric`;
    console.log(URL);
    const result = await axios.get(URL);
    const splicedHourly = spliceData(result.data.hourly);
    callback(result.data);
    callback2(splicedHourly);
  } catch (error) {
    console.error(error);
  }
};

const spliceData = (array: any) => {
  const result = [];
  const todayMidnight = new Date().setHours(24, 0, 0, 0);
  const tomorrowMidnight = todayMidnight + 86400000;
  const dayAfterTommorowMidnight = todayMidnight + 2 * 86400000;

  const todayData = array.filter((item: any) => {
    return item.dt * 1000 < todayMidnight;
  });

  const tommorowData = array.filter((item: any) => {
    return item.dt * 1000 >= todayMidnight && item.dt * 1000 < tomorrowMidnight;
  });

  const dayAfterTommorowData = array.filter((item: any) => {
    return (
      item.dt * 1000 >= tomorrowMidnight &&
      item.dt * 1000 < dayAfterTommorowMidnight
    );
  });

  result.push(todayData, tommorowData, dayAfterTommorowData);

  return result;
};
