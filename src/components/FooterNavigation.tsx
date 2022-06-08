import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function FooterNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(value);
        
      }}
      sx={{ position: "fixed", bottom: 0, width: 1.0 }}
    >
      <BottomNavigationAction label="Weather" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Map" icon={<MapOutlinedIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsOutlinedIcon />} />
      <BottomNavigationAction label="Help" icon={<HelpOutlineOutlinedIcon />} />
    </BottomNavigation>
  );
}
