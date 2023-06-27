import React, { useEffect, useRef, useState } from "react";
import styles from "./AlphaColorPicker.module.scss";

const AplhaColorPicker = ({
  direction,
  barHeightVertical,
  mainVerticalStyleNoMedia,
}) => {
  const [rgbValues, setRGBValues] = useState({
    r: 122.5,
    g: 122.5,
    b: 122.5,
    a: 1,
  });

  const mainRef = useRef(null);

  useEffect(() => {
    if (direction === "vertical") {
      mainRef.current.style.transform = "rotate(90deg)";
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRGBValues((prevRGBValues) => ({
      ...prevRGBValues,
      [name]: value,
    }));
  };

  const pickerStyle = {
    "--r": rgbValues.r,
    "--g": rgbValues.g,
    "--b": rgbValues.b,
    "--a": rgbValues.a,
    transformRotate: "90deg",
  };

  return (
    <div className={styles["main"]}>
      <div
        className={`${styles["rgb-picker"]} ${
          direction === "vertical" ? styles["mainVerticalStyle"] : ""
        } ${mainVerticalStyleNoMedia && styles.mainVerticalStyleNoMedia}`}
        style={pickerStyle}
        ref={mainRef}
      >
        <form className={styles["formClass"]}>
          <input
            type="range"
            value={rgbValues.a}
            min="0"
            max="1"
            step="0.01"
            name="a"
            id="a"
            onChange={handleInputChange}
            style={{ height: barHeightVertical }}
          />
        </form>
      </div>
    </div>
  );
};

export default AplhaColorPicker;
