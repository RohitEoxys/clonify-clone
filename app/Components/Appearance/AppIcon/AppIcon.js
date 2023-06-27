import React, { useState } from "react";
import MobileView from "../../Common/MobileView/MobileView";
import CreateUploadBtn from "../../Common/CreateUploadBtn/createUploadBtn";
import Upload from "./Upload/Upload";
import Create from "./Create/Create";
import Images from "../../Images/Images";

const AppIcon = () => {
  const [currentTab, setCurrentTab] = useState("upload");

  return (
    <>
      <div className="flex flex-col mt-5 gap-12 lg:flex-row  ">
        <div className="w-full md:w-[70%] px-6 md:px-0">
          {/* header */}
          <div className="flex  justify-between  sm:flex-row ">
            <div className="text-black font-normal  text-[17px] sm:text-[25px] md:text-right mb-[10px] ">
              {currentTab === "upload" ? "Upload App Icon" : "Create App Icon"}
            </div>
            <CreateUploadBtn
              setCurrentTab={setCurrentTab}
              initialActiveTab={currentTab}
            />
          </div>
          {currentTab === "upload" && <Upload />}
          {currentTab === "create" && <Create />}
        </div>
        <MobileView source={Images?.mobile} />
      </div>
    </>
  );
};

export default AppIcon;
