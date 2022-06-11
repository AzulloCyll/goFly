import { State } from "../state";
import { useSelector } from "react-redux";

//components
import TopNavigation from "./TopNavigation";

//MUI
import { IconButton, Paper } from "@mui/material";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export default function Header() {
  const fromRedux = useSelector((state: State) => state);

  const { name, country } = fromRedux.weather?.location || {};

  return (
    <Paper
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 5000,
      }}
    >
      <Paper component="form">
        <IconButton>
          <SearchIcon />
        </IconButton>
        {name && country && (
          <InputBase
            size="small"
            disabled
            defaultValue={`${name}, ${country}`}
          />
        )}
        <IconButton sx={{ float: "right" }}>
          <ModeStandbyOutlinedIcon />
        </IconButton>
      </Paper>

      <nav>
        <TopNavigation />
      </nav>
    </Paper>
  );
}
