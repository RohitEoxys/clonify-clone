import {
  Button,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import EditableHexInput from "../../../../Common/ColorComponents/EditableHexInput/EditableHexInput";
import { GreyExportIcon } from "../../../../../assets/SVG/SVG";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SelectBgColor from "../../../LaunchScreen/Create/SelectBackgroundColor/SelectBgColor";

const hexColorData = ["HEX", "HSL", "RGB"];

const useStyles = makeStyles({
  select1280: {
    "@media (max-width: 1280PX)": {
      "&.MuiFormControl-root": {
        width: "150PX",
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

const Background = () => {
  const [hexColor, setHexColor] = React.useState("HEX");

  const styles = useStyles();

  const selectChange = (event) => {
    setHexColor(event.target.value);
    console.log(event);
  };

  return (
    <div className="my-[31px]">
      <h6 className="text-black text-[25px]">Background Image</h6> {/* left */}
      <div className="flex justify-between md:items-center gap-x-2 flex-col md:flex-row ">
        <div>
          <h6 className="text-main text-[17px] mt-[15px] mb-[10px]">
            Select Background Image
          </h6>
          <div>
            <div className="mt-5 bg-[#eaebeb] items-center flex flex-col py-[67px] px-[50px] mb-5 md:mb-2">
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
              <div className="mt-[20px]  text-main font-normal">
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
          <h6 className="text-main text-[17px] mb-5 mt-[15px]">
            Select Background Color
          </h6>
          <SelectBgColor />
          <div className="flex justify-between md:items-center mt-8 md:mt-6 gap-x-5 flex-col xl:flex-row  ">
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
  );
};

export default Background;
