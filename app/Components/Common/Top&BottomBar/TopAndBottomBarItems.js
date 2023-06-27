import React from "react";
import SwitchBtnWithDetails from "../SwitchBtn/SwitchBtnWithDetails/SwitchBtnWithDetails";
import Images from "../../Images/Images";
import MobileView from "../MobileView/MobileView";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";

const listData = [
  { label: "Home", settings: true, iconPath: Images?.homeIcon.src },
  { label: "Playlist", settings: true, iconPath: Images.playListIcon.src },
  { label: "Shorts", settings: true, iconPath: Images.playIcon.src },
  { label: "Watch later", settings: true, iconPath: Images?.timerIcon.src },
  { label: "Setting", settings: true, iconPath: Images.userSettingsIcon.src },
  {
    label: "Notification",
    settings: true,
    iconPath: Images.notificationIcon.src,
  },
];
const TopAndBottomBarItems = ({ clickSource, setCurrentTab }) => {
  const router = useRouter();

  const stylesIconsBtnClickHandler = () => {
    if (clickSource === "topbar") {
      setCurrentTab("topbarStyles");
    } else if (clickSource === "bottomBar") {
      setCurrentTab("bottombarStyles");
    }
  };

  return (
    <div className="flex flex-col mt-5 gap-12 lg:flex-row  ">
      <div className="w-full px-6 md:px-0">
        <Typography className="!text-main !text-normal  !mb-[28px]  text-[15px]  md:!text-subTitle ">
          Configure your bottom navigation here. Choose what to display on the
          bottom of your app.{" "}
          <a className="text-main2" href="#">
            Learn More
          </a>
        </Typography>
        <div className="flex items-center justify-between mb-5 ">
          <h6 className="text-[20px] text-black sm:text-[25px]">Items</h6>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={stylesIconsBtnClickHandler}
          >
            <img src={Images?.textWithPenIcon.src} alt="" />
          </IconButton>
        </div>
        {/* Items */}
        {listData?.map((item) => (
          <SwitchBtnWithDetails
            labelName={item.label}
            iconPath={item.iconPath}
            settings={item.settings}
            icon
          />
        ))}
      </div>
      <MobileView source={Images.topbarMobile} />
    </div>
  );
};

export default TopAndBottomBarItems;
