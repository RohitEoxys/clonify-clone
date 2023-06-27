import React from "react";
import MobileView from "../../../Common/MobileView/MobileView";
import Images from "../../../Images/Images";
import {
  FormControl,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import EditableHexInput from "../../../Common/ColorComponents/EditableHexInput/EditableHexInput";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SwitchBtn from "../../../Common/SwitchBtn/SwitchBtn";
import Circle from "../../../Common/ColorComponents/Circle/Circle";
import SelectBgColor from "../../LaunchScreen/Create/SelectBackgroundColor/SelectBgColor";

const useStyles = makeStyles({
  select1280: {
    "@media (max-width: 1280PX)": {
      "&.MuiFormControl-root": {
        width: "150PX",
      },
    },
  },
});

const hexColorData = ["HEX", "HSL", "RGB"];

const TopbarStyles = ({ clickSource, setCurrentTab }) => {
  const styles = useStyles();

  const [hexColor, setHexColor] = React.useState("HEX");

  const selectChange = (event) => {
    setHexColor(event.target.value);
    console.log(event);
  };

  const stylesIconsBtnClickHandler = () => {
    if (clickSource === "topbar") {
      setCurrentTab("topbarsettings");
    } else {
      setCurrentTab("bottombarSettings");
    }
  };

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
    <div className="w-full px-6 md:px-0">
      <div className="flex flex-col mt-5 gap-12 lg:flex-row">
        <div className="w-full">
          <Typography className="!text-main !text-normal  !mb-[28px]  text-[15px]  md:!text-subTitle ">
            Configure your bottom navigation here. Choose what to display on the
            bottom of your app.{" "}
            <a className="text-main2" href="#">
              Learn More
            </a>
          </Typography>
          <div className="flex items-center justify-between mb-5 ">
            <h6 className="text-[20px] text-black sm:text-[25px]">Styles</h6>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={stylesIconsBtnClickHandler}
            >
              <img src={Images?.barSettingIcon.src} alt="" />
            </IconButton>
          </div>

          {/* top */}
          <div className="flex w-full sm:w-[70%] gap-3 justify-between">
            <div>
              <h6 className="text-main text-[17px] mb-[15px]">
                Select Background Color
              </h6>
              <SelectBgColor mainVerticalStyleNoMedia />
              <div className="flex justify-between mt-8 md:mt-6 gap-x-5 flex-col xl:flex-row  ">
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

            <div className="flex flex-col items-center">
              <h6 className="text-main text-[17px]">Show Text</h6>
              <SwitchBtn />
            </div>
          </div>

          {/* bottom */}
          <div className="flex mt-5 md:mt-10 justify-between  flex-col md:flex-row md:gap-9">
            <div className="flex flex-col min-w-0   mt-[20px] md:w-full">
              <label htmlFor="outlined-basic" className="mb-[12px] text-main ">
                Border Color
              </label>
              <Circle width="100%" circleMainClass="circleMain1" />
            </div>

            <div className="flex flex-col min-w-0   mt-[20px] md:w-full">
              <label htmlFor="outlined-basic" className="mb-[12px] text-main ">
                Selected Item Color
              </label>
              <Circle width="100%" />
            </div>
          </div>
        </div>
        <MobileView source={Images.topbarMobile} />
      </div>
    </div>
  );
};

export default TopbarStyles;
