import React, { useState } from "react";
import Upload from "./Upload/Upload";
import CreateUploadBtn from "../../Common/CreateUploadBtn/createUploadBtn";
import MobileView from "../../Common/MobileView/MobileView";
import Create from "./Create/Create";
import { Typography } from "@mui/material";
import Images from "../../Images/Images";

const LoginSignup = () => {
  const [currentTab, setCurrentTab] = useState("create");

  return (
    <div className="flex flex-col mt-5 gap-12 lg:flex-row  ">
      <div className="w-full md:w-[70%] px-6 md:px-0">
        <Typography className="!text-main !text-normal  !mb-[28px]  text-[15px]  md:!text-subTitle ">
          Design the login, sign up & forgot password screens.{" "}
          <a className="text-main2" href="#">
            Learn More
          </a>
        </Typography>
        {/* header */}
        <div className="flex  justify-between  sm:flex-row ">
          <div className="text-black font-normal  text-[17px] sm:text-[25px] md:text-right mb-[10px] ">
            App Logo
          </div>
          <CreateUploadBtn
            setCurrentTab={setCurrentTab}
            initialActiveTab={currentTab}
          />
        </div>
        {currentTab === "upload" && <Upload />}
        {currentTab === "create" && <Create />}
      </div>
      <MobileView source={Images.logonsignup_mob} />
    </div>
  );
};

export default LoginSignup;
