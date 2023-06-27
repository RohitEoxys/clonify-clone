import { Button } from "@mui/material";
import React from "react";
import { ExportIcon } from "../../../../assets/SVG/SVG";

const Upload = () => {
  return (
    <div className="mt-5 shadow-main bg-[#edf3fb] items-center flex flex-col py-[131px] shadow-a">
      {/* <IconButton component={ExportIcon}></IconButton> */}
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />

        <Button color="secondary" variant="contained" component={ExportIcon}>
          Upload button
        </Button>
      </label>
      <div className="mt-[40px] text-[25px]">Upload App Icon</div>
      <div className="mt-[31px]  text-main font-normal">
        Minimum size 1024*1024px
      </div>
    </div>
  );
};

export default Upload;
