import { Typography } from "@mui/material";
import React from "react";
import MobileView from "../../Common/MobileView/MobileView";
import SwitchBtnWithDetails from "../../Common/SwitchBtn/SwitchBtnWithDetails/SwitchBtnWithDetails";
import Images from "../../Images/Images";

const listData = [
  { label: "Category Scroll", settings: false },
  { label: "Live and upcoming slider", settings: false },
  { label: "Video spotlight slider", settings: true },
  { label: "Subscribe banner", settings: false },
  { label: "Shorts", settings: true },
  { label: "Playlists", settings: true },
  { label: "Top new", settings: true },
  { label: "About YouTube Channel", settings: false },
  { label: "Social links", settings: false },
  { label: "Other links", settings: false },
];

const settingEnable = [3, 5, 6, 7];

const HomeScreen = () => {
  return (
    <div className="flex flex-col mt-5 gap-12 lg:flex-row  ">
      <div className="w-full md:w-[70%] px-6 md:px-0">
        <Typography className="!text-main !text-normal  !mb-[28px]  text-[15px]  md:!text-subTitle ">
          Select & design sections for your app home screen.{" "}
          <a className="text-main2" href="#">
            Learn More
          </a>
        </Typography>

        {/* Items */}
        {listData?.map((item) => (
          <SwitchBtnWithDetails
            labelName={item.label}
            questionIcon
            settings={item.settings}
          />
        ))}
      </div>
      <MobileView source={Images.homescreen_mob} />
    </div>
  );
};

export default HomeScreen;
