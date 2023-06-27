import React from "react";
import SwitchBtn from "../SwitchBtn";
import { Divider } from "@mui/material";
import Images from "../../../Images/Images";

const SwitchBtnWithDetails = ({
  settings,
  labelName,
  icon,
  iconPath,
  questionIcon,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 mt-[10px]">
        <div className="flex items-center">
          {/* icon */}
          {icon && <img src={iconPath} alt="" className="mr-2 " />}
          {/* title */}
          <h6 className="text-[#202124] text-[14px] mr-3 sm:text-[18px]">
            {labelName}
          </h6>
          {/* question */}
          {questionIcon && (
            <div className=" text-[18px] mr-5">
              <i className="fa-regular fa-circle-question ml-1 text-[#c2c4c6]"></i>
            </div>
          )}
        </div>

        <div className="flex">
          {/* settingIcon */}
          {settings && (
            <div className="flex items-center mr-[20px] sm:mr-[38px]">
              <img
                src={Images?.settingIcon.src}
                alt=""
                className="mr-2 h-[20px] sm:h-[25px]"
              />
              <span className="text-[14px] sm:text-[18px] text-main">
                Settings
              </span>
            </div>
          )}
          <SwitchBtn defaultChecked={false} />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default SwitchBtnWithDetails;
