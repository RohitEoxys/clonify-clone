import React, { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 72,
  height: 31,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "4px",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(41px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#1967D2",
        opacity: 1,
        border: 0,
        borderRadius: "500px",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 500,
    backgroundColor: theme.palette.mode === "light" ? "#b8b8b8" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const SwitchBtn = ({ defaultChecked }) => {
  return (
    <div className="flex">
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked={defaultChecked} />}
      />
    </div>
  );
};

export default SwitchBtn;
