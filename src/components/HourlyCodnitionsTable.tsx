import SwipeableViews from "react-swipeable-views";

//MUI
import Paper from "@mui/material/Paper";

export default function HourlyCodnitionsTable(props: any) {
  const { items } = props;

  const styles = {
    paper: {
      borderBottom: "1px solid grey",
      borderRight: "1px solid grey",
      borderRadius: "0",
      height: "31px",
      display: "flex",
      flexDirection: "flex-end",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={{ width: "100%", marginBottom: "0" }}>
      <SwipeableViews
        resistance={true}
        enableMouseEvents
        ignoreNativeScroll={true}
        containerStyle={{ width: "100%" }}
        slideStyle={{ width: "33.3333333333333%" }}
      >
        {items?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "0",
                  height: "50px",
                  backgroundColor: "#151B54",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {new Date(item.dt * 1000).toLocaleTimeString().split(":")[0] +
                  ":" +
                  new Date(item.dt * 1000).toLocaleTimeString().split(":")[1]}
              </Paper>
              <Paper sx={{ ...styles.paper }}>
                {Math.floor(item.wind_speed)} km/h
              </Paper>
              <Paper sx={{ ...styles.paper }}>
                {Math.floor(item.wind_gust)} km/h
              </Paper>
              <Paper sx={{ ...styles.paper }}>{item.wind_deg}&deg;</Paper>
              <Paper sx={{ ...styles.paper }}>
                {Math.floor(item.temp)}&deg;C
              </Paper>
              <Paper sx={{ ...styles.paper }}>
                {Math.round(item.pop * 100)}%
              </Paper>
              <Paper elevation={0} sx={{ ...styles.paper }}>
                {item.clouds}%
              </Paper>
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
}

//
