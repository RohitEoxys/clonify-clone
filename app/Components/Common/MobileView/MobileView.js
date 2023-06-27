import { Box } from "@mui/material";
import React from "react";
import Images from "../../Images/Images";
import Tabs from "./Tabs/Tabs";
import Image from "next/image";

const MobileView = ({ source }) => {
  return (
    <>
      <div className="flex flex-col">
        <Tabs />
        <div className="flex justify-center">
          <Image src={source} alt="" />
        </div>
      </div>
    </>
  );
};

export default MobileView;
