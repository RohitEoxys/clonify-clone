import React from "react";
import Chart from "./Chart/Chart";
import { Typography } from "@mui/material";
import Information from "./Information/Information";

const details = [
  {
    title: "Track your app downloads and installs.",
  },
  {
    title: "Know your app traffic and filter by date range.",
  },
  {
    title: "Compare your Android vs iOS performance.",
  },
  {
    title: "Get insights on searched terms and popular screens.",
  },
];

const Analytics = ({ props }) => {
  return (
    <div className="w-full px-[15px] md:px-[0px] mt-5">
      <Typography className="!text-main !text-normal !text-subTitle !mb-[28px]">
        Understand your customers and their app usage better, and make informed
        decisions.{" "}
        <a className="text-main2" href="#">
          Learn More
        </a>
      </Typography>
      <div className="w-full flex gap-[3rem] flex-col md:flex-row">
        <div className="w-full md:w-[55%]">
          <Chart />
        </div>
        <div className="w-full md:w-[40%] ">
          <Information
            heading="Analytics for your app"
            heading2="Understand your customers and their app usage better, and make informed
        decisions."
            details={details}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
