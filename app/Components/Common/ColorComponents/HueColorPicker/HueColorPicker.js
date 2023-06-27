import React, { useEffect, useState } from "react";
import { Hue } from "react-color/lib/components/common";
import { CustomPicker } from "react-color";
import styles from "./HueColorPicker.module.scss";

const HueColorPicker = ({ direction, height, width }) => {
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0 });

  const inlineStyles = {
    slider: {
      width: direction ? "20px" : "8px",
      borderRadius: "1px",
      height: direction ? "8px" : "20px",
      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
      background: "#fff",
      transform: "translateX(-2.5px)",
    },
  };

  const CustomSlider = () => {
    return <div style={inlineStyles.slider} />;
  };

  const handleHueChange = (hue) => {
    setHsl(hue);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hue = document.querySelector(`.hue-${direction || "horizontal"}`);
      hue.style.borderRadius = "500px";
      if (direction === "vertical") {
        hue.style.height = height;
        hue.style.width = width;

        const sliderEle = document.querySelector(
          `.hue-${direction || "horizontal"} > div`
        );

        sliderEle.style.top = "50%";
      }
    }
  }, []);

  return (
    <div
      style={{
        height: direction === "vertical" ? "100%" : 20,
        position: "relative",
        width: "100%",
      }}
    >
      <Hue
        hsl={hsl}
        pointer={CustomSlider}
        onChange={handleHueChange}
        direction={`${direction || "horizontal"}`}
        className="HueMainClass"
      />
    </div>
  );
};

export default CustomPicker(HueColorPicker);
