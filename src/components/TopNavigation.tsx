import React from "react";

import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";

//MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TopNavigation() {
  const dispatch = useDispatch();
  const { setCurrentActiveView } = bindActionCreators(actionCreators, dispatch);

  const fromRedux = useSelector((state: State) => state);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentActiveView(newValue);
  };

  const { activeValue } = fromRedux.tabControls;
  const { daily } = fromRedux.openWeather;

  return (
    <Tabs
      value={activeValue}
      onChange={handleChange}
      variant="scrollable"
      sx={{
        position: "fixed",
        zIndex: 5000,
        backgroundColor: "white",
        width: "100%",
        boxShadow: 1,
      }}
    >
      {daily?.map((item: any, index: number) => {
        return (
          <Tab
            label={new Date(item.dt * 1000).toLocaleDateString("pl-PL")}
            key={index}
          />
        );
      })}
    </Tabs>
  );
}
