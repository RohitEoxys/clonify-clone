"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const nextStephandler = () => {
    router.push("./connect-channel");
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="py-[10%]">
          <h4 className="text-[20px] mb-[15px]">
            Create YouTube Channel mobile app
          </h4>
          <label className="text-[20px] text-main">Give your app a name</label>
          <input
            type="text"
            className=" outline-0 text-black h-[40px] border-2 mt-5   pl-4 w-full align border-bod mb-[15px]"
          />
          <h3 className="text-[16px] text-main mb-[15px]">
            This is usually your business or brand name.
          </h3>
          <Button
            variant="contained"
            className="bg-main2 text-white"
            onClick={nextStephandler}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
