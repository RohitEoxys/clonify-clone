import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

const CustomColorPicker = ({ width, height }) => {
  const [background, setBackground] = useState("#000");

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

  useEffect(() => {
    const removeElements = () => {
      const elements = document.querySelectorAll(".flexbox-fix");
      elements.forEach((element) => element.remove());
    };

    removeElements();

    document.querySelector(".chrome-picker").style.width = `${
      width ? width : "293px"
    } `;
    document.querySelector(".chrome-picker div:nth-child(2)").style.width =
      "100%";
    document.querySelector(".chrome-picker div:nth-child(2)").style.height =
      "100%";
    document.querySelector(".chrome-picker div:nth-child(1)").style.height =
      height ? height : "100%";

    document.querySelector(".chrome-picker > div:nth-child(2)")?.remove();

    // color selector slider
    const cursorParentEle = document.querySelector(
      ".saturation-white div:nth-child(2) > div"
    );
    cursorParentEle.style.background = "#000";
  }, []);

  return (
    <ChromePicker
      color={background}
      onChangeComplete={handleChangeComplete}
      disableAlpha
    />
  );
};

export default CustomColorPicker;
