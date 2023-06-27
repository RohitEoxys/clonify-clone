import {
  Button,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import {
  CenterAlignIcon,
  GreyExportIcon,
  GreyExportIcon2,
  LeftAlignIcon,
  RightAlignIcon,
} from "../../../../assets/SVG/SVG";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditableHexInput from "../../../Common/ColorComponents/EditableHexInput/EditableHexInput";
import SelectBgColor from "../Create/SelectBackgroundColor/SelectBgColor";

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

  select1280: {
    "@media (max-width: 1280PX)": {
      "&.MuiFormControl-root": {
        width: "150PX",
      },
    },
  },
});

const hexColorData = ["HEX", "HSL", "RGB"];

const Upload = () => {
  const styles = useStyles();
  const [hexColor, setHexColor] = React.useState("HEX");

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

  return (
    <div>
      <div className="mt-5 bg-[#edf3fb] items-center flex flex-col py-[100px]">
        {/* <IconButton component={ExportIcon}></IconButton> */}
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
            component={GreyExportIcon2}
          >
            Upload button
          </Button>
        </label>
        <div className="mt-[40px] text-main text-[15px] md:text-[20px]">
          Upload your image from computer
        </div>
        <div className="mt-[20px] text-[20px] md:text[25px]">
          Upload App Logo
        </div>
        <div className="mt-[20px]  text-main font-normal">
          Minimum size 1024*1024px
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

      <div className="mt-[31px]">
        <h6 className="text-black text-[25px]">Background Image</h6>{" "}
        {/* left */}
        <div className="flex justify-between md:items-center gap-x-2 flex-col md:flex-row ">
          <div className="mt-6">
            <h6 className="text-main text-[17px]">Select Background Image</h6>
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
            />
            <Chip
              label="and"
              variant="outlined"
              clickable
              sx={{ height: 40, width: 55, borderRadius: 0, color: "#5F6368" }}
            />
          </div>

          {/* right */}
          <div className="mt-5">
            <h6 className="text-main text-[17px]  mb-5">
              Select Background Color
            </h6>
            <SelectBgColor />
            <div className="flex justify-between md:items-center mt-8 md:mt-[18px] gap-x-5 flex-col xl:flex-row  ">
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

export default Upload;
