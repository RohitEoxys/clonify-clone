import React from "react";
import { Typography } from "@mui/material";
import Information from "../analytics/Information/Information";
import Form from "./form/Form";

const details = [
  {
    title: "Connect your App Store account.",
  },
  {
    title: "Select an app version to deploy.",
  },
  {
    title: "One click submission and upload.",
  },
  {
    title: "Release new app versions effortlessly.",
  },
];

const Publish = () => {
  return (
    <div className="w-full !px-[15px] !md:px-[0px] !mt-5 md:w-[80%]">
      <Typography className="text-main text-normal text-subTitle mb-[28px]">
        Automatically publish your iOS app to the Apple App Store.{" "}
        <a className="text-main2" href="#">
          Learn More
        </a>
      </Typography>
      <div className="w-full flex gap-[3rem] flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <Form />
        </div>
        <div className="w-full md:w-[50%] ">
          <Information
            heading="Auto publish your iOS App"
            heading2="Automatically publish your iOS app to the Apple App Store."
            details={details}
          />
        </div>
      </div>
    </div>
  );
};

export default Publish;
