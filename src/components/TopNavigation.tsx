import React, { useState } from "react";

//MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { ConstructionOutlined } from "@mui/icons-material";

export default function TopNavigation() {
  const dispatch = useDispatch();
  const { setTopMenuIndexValue, setSliderIndex } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const fromRedux = useSelector((state: State) => state);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTopMenuIndexValue(newValue);
    setSliderIndex(newValue);
  };

  return (
    <Tabs
      value={fromRedux.tabControls.topMenuTabsValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      sx={{ position: "fixed", backgroundColor: "white", zIndex: 2000 }}
    >
      <Tab label="Today" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
      <Tab label="Item Five" />
      <Tab label="Item Six" />
      <Tab label="Item Seven" />
    </Tabs>
  );
}
