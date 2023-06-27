import { Icon, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { CirclePicker } from "react-color";
import Images from "../../../Images/Images";
import { makeStyles } from "@mui/styles";
import { PlusIcon } from "../../../../assets/SVG/SVG";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const defaultColors = [
  "#000",
  "#FF3D00",
  "#FF3D07",
  "#1967D2",
  "#FFC107",
  "#4CAF50",
  "#6e6e6e",
  "#474343",
  "#e60b0b",
];

const useStyles = makeStyles({
  iconButton: {
    "&.MuiIconButton-root": {
      padding: "unset",
      marginRight: "14px",
      marginBottom: "14px",
      marginLeft: "14px",
    },
  },
});

const Circle = ({ alpha, onChange, width, circleMainClass }) => {
  const styles = useStyles();

  const circleRef = useRef(null);

  useEffect(() => {
    const addNew = document.querySelector(
      `.${circleMainClass || "circle_main"}`
    );

    const plusIcon = document.createElement("span");

    const image = document.createElement("img");
    image.src =
      require("../../../../assets/images/plusIconColor.png")?.default?.src;
    image.style.height = "28px"; // Set the desired height
    image.style.width = "28px"; // Set the desired width

    image.alt = "";

    plusIcon.appendChild(image);

    addNew.appendChild(plusIcon);
  }, []);

  const handleChange = (color) => {
    // Extract the alpha value from the color object
    const newAlpha = color.rgb.a;
    // Call the onChange callback with the new alpha value
    onChange(newAlpha);
  };

  return (
    <div className="flex flex-wrap">
      <CirclePicker
        colors={defaultColors}
        width={`${width || "331px"}`}
        ref={circleRef}
        className={`${circleMainClass || "circle_main"}`}
      />
      {/* <IconButton
        aria-label="expand row"
        size="small"
        classes={{ root: styles.iconButton }}
      >
        <Image src={Images?.plusIcon2} alt=""></Image>
      </IconButton> */}
    </div>
  );
};

export default Circle;
