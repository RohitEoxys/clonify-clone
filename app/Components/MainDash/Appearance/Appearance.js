import React, { useState } from "react";
import SubHeader from "../../Common/SubHeader/SubHeader";
import AppIcon from "../../Appearance/AppIcon/AppIcon";
import LaunchScreen from "../../Appearance/LaunchScreen/LaunchScreen";
import LoginSignup from "../../Appearance/Login&Signup/Login&Signup";
import HomeScreen from "../../Appearance/HomeScreen/HomeScreen";
import Playlists from "../../Appearance/Playlists/Playlists";
import NewOptionLayout from "../../Appearance/NewOption/NewOptionLayout";
import TopBar from "../../Appearance/TopBar/TopBar";
import BottomBar from "../../Appearance/BottomBar/BottomBar";

const tabs = [
  "App Icon",
  "Launch Screen",
  "Login & Sign Up",
  "Home Screen",
  "Playlists",
  "Top Bar",
  "Bottom Bar",
  "New Option Layouts",
];

const Appearance = () => {
  const [currentTab, setCurrentTab] = useState("App Icon");

  return (
    <div className="w-full">
      <SubHeader
        tabsArray={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === "App Icon" && <AppIcon />}
      {currentTab === "Launch Screen" && <LaunchScreen />}
      {currentTab === "Login & Sign Up" && <LoginSignup />}
      {currentTab === "Home Screen" && <HomeScreen />}
      {currentTab === "Playlists" && <Playlists />}
      {currentTab === "New Option Layouts" && <NewOptionLayout />}
      {currentTab === "Top Bar" && <TopBar />}
      {currentTab === "Bottom Bar" && <BottomBar />}
    </div>
  );
};

export default Appearance;
