"use client";
import React from "react";
import Footer from "../Common/Footer/Footer";

const NewPassword = () => {
  return (
    <div>
      <div className="home_wrapper m-auto px-9 py-11 border-2  rounded sm:w-full md:w-96 border-bod mt-[10%] mb-[10%]">
        <h4 className="text-center text-lg font-semibold">
          Create New Password
        </h4>
        <h6 className="opacity-70 text-sm my-5 text-main text-center">
          Enter New Password for attsoftware@gmail.com
        </h6>
        <form>
          <div>
            <input
              type="text"
              placeholder="New Password"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-full border-bod"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm Password"
              className=" outline-0 text-black h-[40px] border-2 my-5 bg-[#f1f3f4] rounded-[8px] pl-4 w-full border-bod"
            />
          </div>
          <div className="flex justify-center mt-5 ">
            <button className="w-2/4 m-auto border-[3px] rounded-[34px] border-main2 h-[40px] text-sm text-main2 opacity-100">
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NewPassword;
