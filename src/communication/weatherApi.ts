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
    const result = await axios.get(URL);
    const splicedHourly = spliceData(result.data.hourly);
    callback(result.data);
    callback2(splicedHourly);
  } catch (error) {
    console.error(error);
  }
};

const spliceData = (array: any) => {
  if (array) {
    let iterationsNumber = array.length / 24;
    const result = [];
    for (let i = 0; i < iterationsNumber; i++) {
      result.push(array.slice(i * 24, 24 * (i + 1)));
    }
    return result;
  }
};
