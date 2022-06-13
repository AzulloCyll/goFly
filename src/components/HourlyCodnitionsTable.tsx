import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../state";

export default function HourlyCodnitionsTable() {
  const fromRedux = useSelector((state: State) => state);
  const { hourly } = fromRedux.openWeather ?? {};
  const { activeValue } = fromRedux.tabControls ?? {};

  console.log(activeValue);
  console.log(hourly[activeValue * 24]);

  return <div>dupa from hourly</div>;
}
