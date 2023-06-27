"use client";

import React, { useState } from "react";
import Sidebar from "../Common/sidebar/Sidebar";
import Download from "./download/Download";
import Analytics from "./analytics/Analytics";
import PreView from "./preview/PreView";
import DashBoard from "./Dashboard/DashBoard";
import Connectivity from "./connectivity/Connectivity";
import Appearance from "./Appearance/Appearance";
import Publish from "./publish/Publish";
import PushNotification from "./pushNotification/PushNotification";
import Settings from "./settings/Settings";
import { useSelector } from "react-redux";

const MainDashboard = () => {
  const currentTab = useSelector((state) => state.currentTab.currentTab);

  return (
    <div className="flex w-full">
      <Sidebar />
      {currentTab === "dashboard" ? <DashBoard /> : ""}
      {currentTab === "analytics" ? <Analytics /> : ""}
      {currentTab === "preview" ? <PreView /> : ""}
      {currentTab === "download" ? <Download /> : ""}
      {currentTab === "connectivity" ? <Connectivity /> : ""}
      {currentTab === "appearance" ? <Appearance /> : ""}
      {currentTab === "publish" ? <Publish /> : ""}
      {currentTab === "notifications" ? <PushNotification /> : ""}
      {currentTab === "settings" ? <Settings /> : ""}
    </div>
  );
};

export default MainDashboard;
