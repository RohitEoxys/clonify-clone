import React from "react";
import Images from "../../Images/Images";
import MobileView from "../../Common/MobileView/MobileView";

const Playlists = () => {
  return (
    <>
      <div className="w-[100%]  flex flex-col md:flex-row">
        <div className="w-full md:w-[70%] px-6 md:px-0">
          <div>
            <h4 className="py-6 text-main text-[20px]">
              Select & design sections for your app home screen.
              <span className="text-main2"> Learn More</span>
            </h4>

            <div className="flex md:gap-16 flex-col md:flex-row"></div>
          </div>
        </div>
        <div className="w-full md:w-[30%] mt-10">
          <MobileView source={Images.playlist_mob} />
        </div>
      </div>
    </>
  );
};

export default Playlists;
