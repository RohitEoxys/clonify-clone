import Image from "next/image";
import React from "react";
import Images from "../../Images/Images";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import MobileView from "../../Common/MobileView/MobileView";
const PushNotification = () => {
  return (
    <>
      <div className="pt-4 pb-10 w-[100%] md:w-[80%] flex flex-col md:flex-row px-4">
        <div className="w-full md:w-[55%]">
          <div>
            <h4 className="text-main pt-2 pb-4">
              Deliver timely and relevant information to your app users with
              push notifications.
              <span className="text-main2"> Learn More</span>
            </h4>
          </div>
          <div>
            <div className="py-5 flex flex-col">
              <div className="mb-4 text-main flex justify-between">
                <label className=" font-normal text-[18px] ">
                  Notifiction Title{" "}
                </label>
                <label className=" font-normal text-[18px] ">
                  Maximum 200 Word
                </label>
              </div>
              <input
                type="text"
                className="border-[1px] h-10 border-main border-opacity-50 px-3 outline-none rounded placeholder:text-main"
                placeholder="Flash sales start tonights!"
              />
            </div>
            <div className="py-5 flex flex-col">
              <div className="mb-2 text-main flex justify-between">
                <label className=" font-normal text-[18px] ">Message</label>
                <label className=" font-normal text-[18px] ">
                  Maximum 1024 Word
                </label>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="13"
                className="border px-5 py-3 placeholder:text-main border-main border-opacity-50 resize-none"
                placeholder="Flash sales start tonights. Grab Heavey Discount On All Products"
              ></textarea>
            </div>
          </div>
          <div className="my-7 flex items-center">
            <FormGroup>
              <FormControlLabel control={<Switch />} style={{ gap: "20px" }} />
            </FormGroup>
            <span className="text-main">Schedule Notifiction</span>
          </div>
          <div className="flex items-center md:gap-4 gap-1 mt-16">
            <p className="text-main">Select Device</p>
            <FormControl>
              <Select
                className="w-52 bg-[#d9d9d9] bg-opacity-60 outline-none focus-visible:outline-none border-none text-main"
                defaultValue="1"
              >
                <MenuItem value={1}>Android</MenuItem>
                <MenuItem value={2}>iOS</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-between mt-16">
            <button className="border text-white bg-main2 w-24 rounded flex items-center justify-center gap-2 p-1">
              {" "}
              <svg
                width="16"
                height="14"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3737 9.58333L1.20703 5.41667L5.3737 1.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.20703 5.41669H12.6654C13.7704 5.41669 14.8302 5.85567 15.6116 6.63708C16.393 7.41848 16.832 8.47828 16.832 9.58335C16.832 10.6884 16.393 11.7482 15.6116 12.5296C14.8302 13.311 13.7704 13.75 12.6654 13.75H11.6237"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </button>
            <div className=" flex gap-5">
              <button className="border w-[125px] bg-main text-white bg-opacity-50 p-1">
                Save as Draft
              </button>
              <button className="border text-white bg-main2 w-24 rounded flex items-center justify-center gap-2 p-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 3.125H18.75L21.5698 5.94479C21.7652 6.1401 21.8749 6.40501 21.875 6.68125V20.8333C21.875 21.1096 21.7653 21.3746 21.5699 21.5699C21.3746 21.7653 21.1096 21.875 20.8333 21.875H4.16667C3.8904 21.875 3.62545 21.7653 3.4301 21.5699C3.23475 21.3746 3.125 21.1096 3.125 20.8333V4.16667C3.125 3.8904 3.23475 3.62545 3.4301 3.4301C3.62545 3.23475 3.8904 3.125 4.16667 3.125ZM7.29167 4.16667V9.375H16.6667V4.16667H7.29167ZM6.25 12.5V19.7917H18.75V12.5H6.25ZM13.5417 5.20833H15.625V8.33333H13.5417V5.20833Z"
                    fill="white"
                  />
                </svg>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[45%] mt-10">
          <MobileView source={Images.mobile} />
        </div>
      </div>
    </>
  );
};

export default PushNotification;
