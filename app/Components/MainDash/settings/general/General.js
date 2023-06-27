import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import SwitchBtn from "../../../Common/SwitchBtn/SwitchBtn";

const General = () => {
  return (
    <>
      <div>
        <h4 className="py-6 text-main text-[16px] md:text-[20px]">
          Design your App Menu, integrate social media pages and manage the
          overall settings of your app.
          <span className="text-main2"> Learn More</span>
        </h4>
        <div className="flex md:gap-16 flex-col md:flex-row">
          <div className="w-full md:w-2/4 ">
            <div className="py-5 flex flex-col">
              <div className="mb-4 text-main">
                <label className=" font-normal text-[24px] ">
                  Give your app a name
                </label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none placeholder:text-main w-full md:w-[90%]"
                placeholder="Web"
              />
              <small className="text-main mt-2 text-[12px]">
                This is usually your business or brand name.
              </small>
            </div>
            <div className="py-6 flex flex-col">
              <div className="mb-4 text-main">
                <label className=" font-normal text-[18px] ">Email</label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none placeholder:text-main w-full md:w-[90%]"
                placeholder="test@gmail.com"
              />
            </div>
            <div className="py-6 flex flex-col">
              <div className="mb-4 text-main">
                <label className=" font-normal text-[18px] ">
                  Business phone
                </label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none placeholder:text-main w-full md:w-[90%]"
              />
            </div>
            <div className="py-7 flex flex-col">
              <div className="mb-5 text-main">
                <label className=" font-normal text-[18px] ">
                  Link to your terms and conditions
                </label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none placeholder:text-main w-full md:w-[90%]"
                placeholder="https://example.com"
              />
            </div>
          </div>
          <div className=" w-full md:w-2/4 py-3">
            <div className="flex justify-between items-center">
              <h4 className="text-[20px] text-main ">Hide video views</h4>
              <SwitchBtn />
            </div>
            <div className="flex justify-between items-center py-2 ">
              <h4 className="text-[20px] text-main ">
                Hide number of subscribers
              </h4>
              <SwitchBtn />
            </div>
            <div className="flex justify-between items-center py-2 ">
              <h4 className="text-[20px] text-main ">Hide comments</h4>
              <SwitchBtn />
            </div>
            <div className="flex justify-between items-center py-2 ">
              <h4 className="text-[20px] text-main ">Disable add comment</h4>
              <SwitchBtn />
            </div>
            <div className="flex justify-between items-center py-2 ">
              <h4 className="text-[20px] text-main ">
                Show how many viewers like this video
              </h4>
              <SwitchBtn />
            </div>
            <div className="flex justify-between items-center py-2 ">
              <h4 className="text-[20px] text-main ">Enable share icon</h4>
              <SwitchBtn />
            </div>
            <div className="py-7 flex flex-col mt-[58px]">
              <div className="mb-5 text-main">
                <label className=" font-normal text-[18px] w-80 flex">
                  To delete your app type your app name in the following box!
                </label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none placeholder:text-main w-full md:w-[90%]"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
