"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

import React from "react";

const page = () => {
  const router = useRouter();
  const ViewHandler = () => {
    router.push("./view");
  };
  return (
    <>
      <div className="mt-[20%] mb-[20%] mx-auto flex justify-center">
        <Button
          className="border-main2 bg-main2 text-white rounded w-72 hover:none"
          variant="contained"
          onClick={ViewHandler}
        >
          Connect YouTube Channel
        </Button>
      </div>
    </>
  );
};

export default page;
