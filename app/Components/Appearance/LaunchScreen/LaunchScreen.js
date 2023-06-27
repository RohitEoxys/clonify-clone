import React, { useState } from "react";
import CreateUploadBtn from "../../Common/CreateUploadBtn/createUploadBtn";
import Upload from "./Upload/Upload";
import Create from "./Create/Create";
import MobileView from "../../Common/MobileView/MobileView";
import Images from "../../Images/Images";

const LaunchScreen = () => {
  const [currentTab, setCurrentTab] = useState("create");

  return (
    <div className="flex flex-col mt-5 gap-12 lg:flex-row">
      <div className="w-full md:w-[70%] px-6 md:px-0">
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
      <MobileView source={Images?.lauchScreenMobile} />
    </div>
  );
};

export default LaunchScreen;
