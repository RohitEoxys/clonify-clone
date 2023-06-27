import {
  Avatar,
  Button,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  LeftAlignIcon,
  CenterAlignIcon,
  RightAlignIcon,
  GreyExportIcon,
} from "../../../../assets/SVG/SVG";
import EditableHexInput from "../../../Common/ColorComponents/EditableHexInput/EditableHexInput";
import Circle from "../../../Common/ColorComponents/Circle/Circle";
import SelectBgColor from "../../LaunchScreen/Create/SelectBackgroundColor/SelectBgColor";

const defaultFontFamily = "Dancing Script"; // Default value for font family select
const fontFamilyData = ["Roboto", "Dancing Script"];
const hexColorData = ["HEX", "HSL", "RGB"];

const useStyles = makeStyles({
  fontSelectLaptop: {
    "@media (max-width: 1199px)": {
      "&.MuiFormControl-root": {
        width: "200px",
      },
    },
  },

  fontSelectmd: {
    "@media (max-width: 1199px)": {
      "&.MuiFormControl-root": {
        width: "100%",
      },
    },
  },

  chipRoot1100: {
    "@media (max-width: 1100px)": {
      "&.MuiChip-root": {
        width: "100px",
      },
    },
  },
  chipRoot768: {
    "@media (max-width: 768px)": {
      "&.MuiChip-root": {
        width: "100%",
      },
    },
  },

  select1280: {
    "@media (max-width: 1280PX)": {
      "&.MuiFormControl-root": {
        width: "150PX",
      },
    },
  },

  select768: {
    "@media (max-width: 768px)": {
      "&.MuiFormControl-root": {
        width: "100%",
      },
    },
  },
});

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

const Create = () => {
  const [fontFamily, setFontFamily] = React.useState(defaultFontFamily);
  const [hexColor, setHexColor] = React.useState("HEX");

  const styles = useStyles();

  const selectChange = (event) => {
    setHexColor(event.target.value);
    console.log(event);
  };

  return (
    <div className="main">
      {/* Upper */}
      <div className="flex justify-between gap-x-5 flex-col md:flex-row">
        <div className="flex flex-col  max-[768px]:w-full max-[1199px]:w-[200px] mb-5 md:mb-0 w-[331px]">
          <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
            Logo Text
          </label>
          <OutlinedInput placeholder="Web" size="small" />
        </div>
        <div className="flex flex-col min-w-0  md:mt-0 md:w-[331px] w-full ">
          <label htmlFor="outlined-basic" className="mb-[12px] text-main ">
            Font Color
          </label>
          <Circle />
        </div>
      </div>

      <div className="flex justify-between mt-[25px] md:flex-row flex-col">
        <div className="flex flex-col  md:mb-0 mb-5 ">
          <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
            Font Family
          </label>
          <FormControl
            sx={{ width: 331 }}
            classes={{
              root: `${styles.fontSelectLaptop} ${styles.fontSelectmd}`,
            }}
          >
            <Select
              value={fontFamily}
              onChange={(event) => selectChange(event)}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              defaultValue={defaultFontFamily}
              IconComponent={KeyboardArrowDownIcon}
            >
              {fontFamilyData.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col md:w-[331px] w-full ">
          <label htmlFor="outlined-basic" className="mb-[15px] text-main ">
            Font Size
          </label>
          <OutlinedInput placeholder="20px" size="small" />
        </div>
      </div>

      <div className="flex md:items-center mt-[20px]  md:flex-row md:mt-[46px] flex-col">
        <h6 className="text-main md:text-[25px] mr-[30px] md:mb-0 mb-3 text-left text-[20px]">
          Alignment
        </h6>
        <div className="flex justify-between items-center gap-5  w-full  flex-wrap ">
          <Chip
            icon={<LeftAlignIcon />}
            label="Left"
            variant="outlined"
            clickable
            classes={{ root: styles.chipRoot1100 }}
            sx={{ height: 40, width: 140, borderRadius: 0 }}
          />
          <Chip
            icon={<CenterAlignIcon />}
            label="Center"
            variant="outlined"
            clickable
            sx={{ height: 40, width: 140, borderRadius: 0 }}
            classes={{ root: styles.chipRoot1100 }}
          />
          <Chip
            icon={<RightAlignIcon />}
            label="Right"
            variant="outlined"
            clickable
            sx={{ height: 40, width: 140, borderRadius: 0 }}
            classes={{ root: styles.chipRoot1100 }}
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[31px]">
        <h6 className="text-black text-[25px]">Background Image</h6>{" "}
        {/* left */}
        <div className="flex justify-between md:items-center gap-x-2 flex-col md:flex-row ">
          <div>
            <h6 className="text-main text-[16px] mt-[15px] mb-[10px]">
              Select Background Image
            </h6>
            <div>
              <div className="mt-5 bg-[#eaebeb] items-center flex flex-col max-[1279px]:py-[96px] py-[70.5px] px-[50px] mb-5 md:mb-2">
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button
                    color="secondary"
                    variant="contained"
                    component={GreyExportIcon}
                  >
                    Upload button
                  </Button>
                </label>
                <div className="mt-[20px] text-center text-main font-normal">
                  Minimum size 1242*2208px
                </div>
              </div>
            </div>
          </div>

          {/* center */}
          <div className="flex gap-x-5 mb-5 md:mb-0 max-[1050px]:flex-col max-[1050px]:gap-5">
            <Chip
              label="or"
              variant="outlined"
              clickable
              sx={{
                height: 40,
                width: 55,
                borderRadius: 0,
                borderColor: "#1967D2",
                color: "#1967D2",
              }}
              classes={{ root: styles.chipRoot768 }}
            />
            <Chip
              label="and"
              variant="outlined"
              clickable
              sx={{ height: 40, width: 55, borderRadius: 0, color: "#5F6368" }}
              classes={{ root: styles.chipRoot768 }}
            />
          </div>

          {/* right */}
          <div>
            <h6 className="text-main text-[16px] mt-[10px] mb-5">
              Select Background Color
            </h6>
            <SelectBgColor />
            <div className="flex justify-between  mt-[18px] md:mt-[18px] gap-x-5 flex-col xl:flex-row  ">
              <div className="flex flex-col xl:mb-0 mb-3">
                <FormControl
                  sx={{ width: 90 }}
                  classes={{ root: styles.select1280 }}
                >
                  <Select
                    value={hexColor}
                    onChange={(event) => selectChange(event, setHexColor)}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    defaultValue={hexColor}
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
      </div>
    </div>
  );
};

export default Create;
