import React, { useState } from "react";
import SubHeader from "../../Common/SubHeader/SubHeader";
import General from "./general/General";
import Users from "./Users/Users";
import Social from "./Social/Social";
import Playlist from "./playlist/Playlist";

const tabs = ["General", "Users", "Social", "Playlist"];
const Settings = () => {
  const [currentTab, setCurrentTab] = useState("General");

  return (
    <>
      <div className="md:w-[80%] w-full md:pr-5 px-2">
        <div className="w-full">
          <SubHeader
            tabsArray={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          {currentTab === "General" ? <General /> : ""}
          {currentTab === "Users" ? <Users /> : ""}
          {currentTab === "Social" ? <Social /> : ""}
          {currentTab === "Playlist" ? <Playlist /> : ""}
        </div>
      </div>
    </>
  );
};

export default Settings;
