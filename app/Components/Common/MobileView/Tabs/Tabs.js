import React, { useState } from "react";

const enabledTab = `border-2 border-[#1967D2] w-[105px] rounded-s-full`;
const disabledTab = `border-2 border-main w-[105px] rounded-s-full`;
const enabledText = `text-main2 text-normal text-subTitle`;
const disabledText = `text-main text-normal text-subTitle`;

const Tabs = () => {
  const [active, setActive] = useState("ios");

  const tabClickHandler = (value) => {
    setActive(value);
  };

  return (
    <div className="flex gap-1 justify-center">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => tabClickHandler("ios")}
      >
        <div className={`${active === "ios" ? enabledTab : disabledTab}`} />
        <div className={`${active === "ios" ? enabledText : disabledText}`}>
          iOS
        </div>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => tabClickHandler("android")}
      >
        <div className={`${active === "android" ? enabledTab : disabledTab}`} />
        <div className={`${active === "android" ? enabledText : disabledText}`}>
          Android
        </div>
      </div>
    </div>
  );
};

export default Tabs;
