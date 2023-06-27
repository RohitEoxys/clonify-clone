"use client";

import React, { useState } from "react";
import GridView from "./GridView/GridView";
import ListView from "./ListView/ListView";
import Image from "next/image";
import Images from "../Images/Images";
import { Tooltip } from "@mui/material";
import SideDrawer from "../../Components/Common/sideDrawer/SideDrawer";

const View = () => {
  const [toggleView, setToggleView] = useState(false);

  const dotsClickHandler = () => {
    setToggleView(!toggleView);
  };

  return (
    <div className="flex">
      <SideDrawer />
      <div className="w-full bg-white md:pr-16 pr-[15px] mt-8">
        <div className="flex justify-between mb-[23px]">
          <h1 className="text-subTitle font-semibold text-main">Apps</h1>
          {toggleView ? (
            <Tooltip
              title="Grid View"
              variant="solid"
              size="small"
              placement="left"
              arrow
            >
              <Image
                src={Images?.gridViewIcon}
                alt=""
                className="cursor-pointer"
                onClick={dotsClickHandler}
              />
            </Tooltip>
          ) : (
            <Tooltip
              title="List View"
              variant="solid"
              placement="left"
              size="small"
              arrow
            >
              <Image
                src={Images?.listViewIcon}
                alt=""
                className="cursor-pointer"
                onClick={dotsClickHandler}
              />
            </Tooltip>
          )}
        </div>
        {!toggleView && <GridView />}
        {toggleView && <ListView />}
      </div>
    </div>
  );
};

export default View;
