import { actionCreators, State } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import SwipeableViews from "react-swipeable-views";
import "swiper/css";

//components
import CurrentConditionsTable from "./CurrentConditionsTable";
import LeftColumn from "./LeftColumn";
import HourlyCodnitionsTable from "./HourlyCodnitionsTable";

//MUI
import Container from "@mui/material/Container";

//icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function SwipableVievs() {
  const dispatch = useDispatch();
  const { setCurrentActiveView } = bindActionCreators(actionCreators, dispatch);
  const fromRedux = useSelector((state: State) => state);

  const { daily } = fromRedux.openWeather ?? {};
  const slicedHourly = fromRedux.openWeather.slicedHourly ?? {};
  const { activeValue } = fromRedux.tabControls ?? {};

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

  return (
    <SwipeableViews
      index={activeValue}
      disableLazyLoading={false}
      onChangeIndex={(value: number) => handleChangeIndex(value)}
      resistance={true}
    >
      {daily ? (
        daily.map((item: any, index: number) => {
          const { weather } = item;
          const { icon } = weather[0];

          return (
            <div key={index}>
              <Container sx={{ ...styles.container, paddingTop: "96px" }}>
                <p>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={weather[0].description}
                  />
                </p>
                <p>XXXX FLYING CONDITIONS</p>
              </Container>

              <Container sx={{ ...styles.container }}>
                <CurrentConditionsTable weather={item} />
              </Container>

              <Container
                sx={{
                  ...styles.container,
                  paddingBottom: "64px",
                  margin: 0,
                  width: 1,
                }}
              >
                {slicedHourly[index] ? (
                  <>
                    <ArrowDownwardIcon />
                    <LeftColumn />
                    <HourlyCodnitionsTable items={slicedHourly[index]} />
                  </>
                ) : (
                  <p>NO DATA FOR THAT DAY</p>
                )}
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
