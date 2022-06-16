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
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export default function LeftColumn() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Paper
        sx={{
          width: "16.5%",
          display: "inline-block",
          float: "left",
          borderRadius: 0,
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
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <AirOutlinedIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "3px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <WindPowerIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <ExploreOutlinedIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <ThermostatOutlinedIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <ThunderstormOutlinedIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <CloudOutlinedIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
        <Paper elevation={0} sx={{ textAlign: "right" }}>
          <WbTwilightIcon
            sx={{
              color: "gray",
              marginRight: "5px",
              marginTop: "2px",
              marginBottom: "2px",
            }}
          />
        </Paper>
      </Paper>
    </div>
  );
}
