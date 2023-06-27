import React from "react";
import ColorPicker from "../../../Common/ColorComponents/CustomColorPicker/CustomColorPicker";
import HueColorPicker from "../../../Common/ColorComponents/HueColorPicker/HueColorPicker";
import AlphaColorPicker from "../../../Common/ColorComponents/AlphaColorPicker/AlphaColorPicker";
import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditableHexInput from "../../../Common/ColorComponents/EditableHexInput/EditableHexInput";
import { useTheme } from "@mui/material/styles";
import Circle from "../../../Common/ColorComponents/Circle/Circle";
import { makeStyles } from "@mui/styles";

const hexColorData = ["HEX", "HSL", "RGB"];
const fontFamilyData = ["Roboto", "Dancing Script"];

const defaultHexColor = "HEX"; // Default value for hex color select
const defaultFontFamily = "Dancing Script"; // Default value for font family select

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles({
  fontSelectLaptop: {
    "@media (max-width: 1199px)": {
      "&.MuiFormControl-root": {
        width: "200px",
      },
    },
  },
});

const Create = () => {
  const styles = useStyles();
  const theme = useTheme();
  const [age, setAge] = React.useState("");
  const [personName, setPersonName] = React.useState([]);
  const [hexColor, setHexColor] = React.useState(defaultHexColor);
  const [fontFamily, setFontFamily] = React.useState(defaultFontFamily);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const selectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <h6 className="text-main  mb-4">Background Color</h6>
      <div className="w-full flex gap-x-12 flex-col md:flex-row ">
        <div className="flex ">
          <ColorPicker />
        </div>
        {/* Right */}
        <div className="w-full flex flex-col justify-center mt-[20px] md:mt-[unset]">
          <HueColorPicker />

          <div className="mt-4 ">
            <AlphaColorPicker />
          </div>

          {/* select */}
          <div className="flex justify-between items-center mt-[30px] md:mt-[80px] gap-1">
            <div className="flex flex-col">
              <FormControl sx={{ width: 80 }}>
                <Select
                  value={hexColor}
                  onChange={(event) => selectChange(event, setHexColor)}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  defaultValue={defaultHexColor}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {hexColorData.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <EditableHexInput hex={"#4287f5"} />
          </div>
        </div>
      </div>
      <div className="mt-[56px]">
        <div className="flex justify-between gap-x-6  flex-col sm:flex-row">
          {/* input */}
          <div className="flex flex-col">
            <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
              App Icon Text
            </label>
            <OutlinedInput placeholder="Web" size="small" />
          </div>

          <div className="flex flex-col mt-[20px] sm:mt-0">
            <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
              Font Family
            </label>
            <FormControl
              sx={{ width: 331 }}
              classes={{ root: styles.fontSelectLaptop }}
            >
              <Select
                value={fontFamily}
                onChange={(event) => selectChange(event, setFontFamily)}
                input={<OutlinedInput />}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                defaultValue={defaultFontFamily}
                IconComponent={KeyboardArrowDownIcon}
              >
                {fontFamilyData.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex justify-between gap-x-6  flex-col sm:flex-row mt-[37px]">
          {/* input */}
          <div className="flex flex-col">
            <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
              Font Size
            </label>
            <OutlinedInput placeholder="20px" size="small" />
          </div>

          <div className="flex flex-col min-w-0 max-[1199px]:w-[200px] sm:mt-0 mt-[20px] max-[480px]:w-full">
            <label htmlFor="outlined-basic" className="mb-[12px] text-main ">
              Font Color
            </label>
            <Circle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
