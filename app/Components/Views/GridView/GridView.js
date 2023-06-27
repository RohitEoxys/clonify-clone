import Image from "next/image";
import React from "react";
import Images from "../../Images/Images";
import { useRouter } from "next/navigation";

const GridView = () => {
  const router = useRouter();

  const dashboardHandler = () => {
    router.push("./user");
  };
  return (
    <React.Fragment>
      {/* Card */}
      <div className="flex flex-wrap">
        <div
          className="w-full myBorder sm:3/4 lg:w-1/4  min-[600px]:w-3/4 sm:mr-[40px] sm:mb-[40px] cursor-pointer"
          onClick={dashboardHandler}
        >
          <div className="flex justify-center p-[30px]  border-b-[0.5px] border-opacity-20 border-[#000000]">
            <Image src={Images?.gridViewProfile} alt="" />
          </div>
          {/* content */}
          <div className="py-[19px] px-[15px]">
            <div className="flex justify-between mb-[12px]">
              <h1 className="text-[#202124] font-semibold text-subTitle ">
                Web
              </h1>
              <Image src={Images.menuIcon} alt="" className="cursor-pointer" />
            </div>
            <div className="text-main font-normal text-xSmall w-full sm:w-4/5 ">
              A basic app structure... Prototype Last modified 12:09 PM
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridView;
