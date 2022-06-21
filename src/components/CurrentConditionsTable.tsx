//MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

//icons
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WindPowerIcon from "@mui/icons-material/WindPower";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export default function CurrentConditionsTable(props: any) {
  const { wind_speed, wind_gust, wind_deg, temp, rain, clouds, sunset } =
    props.weather;

  const date = new Date(sunset * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div>
      <Box
        className="Box"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography
            className="Typography"
            sx={{ fontWeight: "700", color: "#151b54" }}
          >
            Wind
          </Typography>
          <Typography variant="caption">(at ground)</Typography>
        </Stack>

        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "#151B54" }}
        ></Divider>

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px", width: "100%" }}
        >
          <AirOutlinedIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Wind Speed
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {Math.round(wind_speed)} kph
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px" }}
        >
          <WindPowerIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Gust
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {Math.round(wind_gust)} kph
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px" }}
        >
          <ExploreOutlinedIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Direction
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", float: "right", fontWeight: "bold" }}
          >
            {wind_deg}&deg;
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography
            sx={{ fontWeight: "bold", color: "#151B54", marginTop: 3 }}
          >
            Conditions
          </Typography>
        </Stack>

        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "#151B54" }}
        ></Divider>

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px", width: "100%" }}
        >
          <ThermostatOutlinedIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Temperature
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {Math.round(temp.day)}&deg;C
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px", width: "100%" }}
        >
          <ThunderstormOutlinedIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Precipitation
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {rain ? Math.round(rain) : 0} mm
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Typography
            sx={{ fontWeight: "bold", color: "#151B54", marginTop: 3 }}
          >
            Visibility
          </Typography>
        </Stack>

        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "#151B54" }}
        ></Divider>

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px", width: "100%" }}
        >
          <CloudOutlinedIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Cloud Coverage
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {clouds}%
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>

        <Divider />

        <Stack
          spacing={2}
          direction="row"
          display="block"
          sx={{ paddingTop: "3px", paddingBottom: "3px", width: "100%" }}
        >
          <WbTwilightIcon sx={{ color: "gray", float: "left" }} />
          <Typography sx={{ color: "#3b3b3b", float: "left", paddingLeft: 4 }}>
            Sunset
          </Typography>
          <Typography
            sx={{ color: "#3b3b3b", fontWeight: "bold", float: "right" }}
          >
            {hours}:{minutes}
          </Typography>
          <div style={{ clear: "both" }}></div>
        </Stack>
      </Box>
    </div>
  );
}
