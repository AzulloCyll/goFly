import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import SwipeableViews from "react-swipeable-views";
import "swiper/css";

//components
import CurrentConditionsTable from "./CurrentConditionsTable";

//MUI
import Container from "@mui/material/Container";

export default function SwipableVievs() {
  const dispatch = useDispatch();
  const { setCurrentActiveView } = bindActionCreators(actionCreators, dispatch);
  const fromRedux = useSelector((state: State) => state);

  const { activeValue } = fromRedux.tabControls;

  const handleChangeIndex = (value: number) => {
    setCurrentActiveView(value);
  };

  const styles = {
    slide: {
      minHeight: "100vh",
      color: "black",
    },
    container: {
      width: "90%",
      paddingLeft: "0px",
      paddingRight: "0px",
      textAlign: "center",
      marginBottom: "20px",
    },
  };

  const { forecastday } = fromRedux.weather.forecast ?? {};
  const { current } = fromRedux.weather ?? {};

  return (
    <SwipeableViews
      index={activeValue}
      onChangeIndex={(value: number) => handleChangeIndex(value)}
    >
      {forecastday ? (
        forecastday.map((item: any, index: number) => {
          const { day } = item;

          return (
            <div key={index}>
              <Container sx={{ ...styles.container, paddingTop: "96px" }}>
                <p>
                  <img src={day.condition.icon} alt={day.condition.text} />
                </p>
                <p>POOR FLYING CONDITIONS</p>
              </Container>

              <Container sx={{ ...styles.container }}>
                <CurrentConditionsTable day={day} current={current} />
              </Container>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </SwipeableViews>
  );
}
