import React, { useState } from "react";
import TopAndBottomBarItems from "../../Common/Top&BottomBar/TopAndBottomBarItems";
import TopbarStyles from "./TopbarStyles/TopbarStyles";

const TopBar = () => {
  const [currentTab, setCurrentTab] = useState("topbarsettings");
  console.log(currentTab);

  return (
    <>
      {currentTab === "topbarsettings" && (
        <TopAndBottomBarItems
          clickSource="topbar"
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab === "topbarStyles" && (
        <TopbarStyles clickSource="topbar" setCurrentTab={setCurrentTab} />
      )}
    </>
  );
};

export default TopBar;
