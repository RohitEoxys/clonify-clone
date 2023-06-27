import { Button } from "@mui/material";
import SubHeader from "../../../Common/SubHeader/SubHeader";
import { useState } from "react";
import { GreyExportIcon } from "../../../../assets/SVG/SVG";
import Background from "./Background/Background";

const tabsArray = ["Background", "Welcome Text", "Social", "Color Theme"];

const Upload = () => {
  const [currentTab, setCurrentTab] = useState("Background");

  return (
    <div>
      <div className="mt-5 bg-[#edf3fb] items-center flex flex-col py-[131px]">
        {/* <IconButton component={ExportIcon}></IconButton> */}
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />

          <Button
            color="secondary"
            variant="contained"
            component={GreyExportIcon}
          >
            Upload button
          </Button>
        </label>
        <div className="mt-[40px] text-main text-[15px] md:text-[20px]">
          Upload your image from computer
        </div>
        <div className="mt-[20px] text-[20px] md:text[25px]">
          Upload App Logo
        </div>
        <div className="mt-[20px]  text-main font-normal">
          Minimum size 1024*1024px
        </div>
      </div>
      {/* menu */}
      <div className="w-full mt-[20px]">
        <SubHeader tabsArray={tabsArray} setCurrentTab={setCurrentTab} />
      </div>

      <div className="w-full mt-[20px]">
        {currentTab === "Background" && <Background />}
      </div>
    </div>
  );
};

export default Upload;
