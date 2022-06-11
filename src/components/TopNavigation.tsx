import React, { useState } from "react";

//MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";

export default function TopNavigation() {
  const dispatch = useDispatch();
  const { setCurrentActiveView } = bindActionCreators(actionCreators, dispatch);

  const fromRedux = useSelector((state: State) => state);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentActiveView(newValue);
  };

  const { activeValue } = fromRedux.tabControls;
  const { forecastday } = fromRedux.weather.forecast ?? {};

  return (
    <Tabs
      value={activeValue}
      onChange={handleChange}
      variant="fullWidth"
      sx={{
        position: "fixed",
        zIndex: 5000,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      {forecastday?.map((item: any, index: number) => {
        return <Tab label={item.date} key={index} />;
      })}
    </Tabs>
  );
}
