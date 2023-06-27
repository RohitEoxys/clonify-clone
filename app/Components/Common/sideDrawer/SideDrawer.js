import Image from "next/image";
import React from "react";
import Images from "../../Images/Images";
import styles from "./sideDrawer.module.scss";

const selectedClass =
  "bg-[#1967d20f]  rounded-tr-full rounded-br-full text-main2";

const SideDrawer = () => {
  return (
    <div className="min-w-fit mt-8">
      <ul className="mr-8">
        <li
          className={`${styles.selected} flex shadow-a pl-[17px] pr-[15px] py-[10px] rounded-full cursor-pointer ml-8`}
        >
          <Image
            src={Images.plusIcon}
            className="mr-[13px] w-[15px] h-[15px] md:w-[21px] md:h-[21px]"
            alt=""
          />
          <h1 className="text-xSmall sm:text-[17px] font-normal text-[#5F6368]">
            Create
          </h1>
        </li>
        <li
          className={`${selectedClass} flex mt-[37px] cursor-pointer py-[10px] pl-8`}
        >
          <Image
            src={Images.myAppIcon}
            className="mr-[13px] ml-[17px] w-[15px] h-[15px] md:w-[21px] md:h-[21px] "
            alt=""
          />
          <h1
            className={`text-xSmall sm:text-[17px] font-normal text-[#5F6368] ${
              selectedClass && "text-main2"
            }`}
          >
            My Apps
          </h1>
        </li>
        <li className="flex mt-[37px] cursor-pointer pl-8 ">
          <Image
            src={Images.subscriptionIcon}
            className="mr-[13px] ml-[17px] w-[15px] h-[15px] md:w-[21px] md:h-[21px] "
            alt=""
          />
          <h1 className="text-xSmall sm:text-[17px] font-normal text-[#5F6368]">
            My Subscription
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
