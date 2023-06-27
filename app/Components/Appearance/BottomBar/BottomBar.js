import React, { useState } from "react";
import TopAndBottomBarItems from "../../Common/Top&BottomBar/TopAndBottomBarItems";
import BottomBarStyles from "./BottomBarStyles/BottomBarStyles";

const BottomBar = () => {
  const [currentTab, setCurrentTab] = useState("bottombarSettings");

  console.log(currentTab);

  return (
    <>
      {currentTab === "bottombarSettings" && (
        <TopAndBottomBarItems
          clickSource="bottomBar"
          setCurrentTab={setCurrentTab}
        />
      )}
      {currentTab === "bottombarStyles" && (
        <BottomBarStyles
          clickSource="bottomBar"
          setCurrentTab={setCurrentTab}
        />
      )}
    </>
  );
};

export default BottomBar;
