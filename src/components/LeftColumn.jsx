//components

//MUI
import Paper from "@mui/material/Paper";

//icons
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

export default function LeftColumn() {
  const styles = {
    paper: {
      height: "32px",
      borderRadius: "0",
      display: "flex",
      flexDirection: "flex-end",
      justifyContent: "right",
      alignItems: "center",
    },
    icon: {
      color: "gray",
      paddingRight: "5px",
    },
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Paper
        elevation={0}
        sx={{
          width: "16.5%",
          display: "inline-block",
          float: "left",
          borderRadius: 0,
          borderBottom: "1px solid gray",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#151B54",
            color: "white",
            borderRadius: "0",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <WatchLaterOutlinedIcon sx={{ marginRight: "5px" }} />
        </Paper>
        <Paper elevation={0}>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <AirOutlinedIcon sx={{ ...styles.icon }} />
          </Paper>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <WindPowerIcon sx={{ ...styles.icon }} />
          </Paper>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <ExploreOutlinedIcon sx={{ ...styles.icon }} />
          </Paper>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <ThermostatOutlinedIcon sx={{ ...styles.icon }} />
          </Paper>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <ThunderstormOutlinedIcon sx={{ ...styles.icon }} />
          </Paper>
          <Paper elevation={0} sx={{ ...styles.paper }}>
            <CloudOutlinedIcon sx={{ ...styles.icon }} />
          </Paper>
        </Paper>
      </Paper>
    </div>
  );
}
