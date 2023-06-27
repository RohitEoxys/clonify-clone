import React from "react";
import CustomColorPicker from "../../../../Common/ColorComponents/CustomColorPicker/CustomColorPicker";
import HueColorPicker from "../../../../Common/ColorComponents/HueColorPicker/HueColorPicker";
import AplhaColorPicker from "../../../../Common/ColorComponents/AlphaColorPicker/AlphaColorPicker";

const SelectBgColor = ({ mainVerticalStyleNoMedia }) => {
  return (
    <div className="w-full flex justify-between gap-6">
      <div className="w-[80%] h-full">
        <CustomColorPicker width="100%" height="180px" />
      </div>
      <div className="">
        <HueColorPicker direction="vertical" height="100%" width="15px" />
      </div>
      <div className="ml-[5px]">
        <AplhaColorPicker
          direction="vertical"
          barHeightVertical="15px"
          mainVerticalStyleNoMedia={mainVerticalStyleNoMedia}
        />
      </div>
    </div>
  );
};

export default SelectBgColor;
