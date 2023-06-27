"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Images from "../../Images/Images";
import ResponsiveSidebar from "../responsive-sidebar/ResponsiveSidebar";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../../redux/features/Auth";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.auth.isLogin);

  const [currentTab, setCurrentTab] = useState("dashboard");

  const newAccHandler = () => {
    router.push("./signup");
  };
  const logoClickHandler = () => {
    router.push("./");
    dispatch(setLogin(false));
  };

  return (
    <>
      <div
        className={
          "w-full  h-25  py-2 px-4 sm:px-6 flex justify-between items-center  border-b border-bod "
        }
      >
        <div className="flex items-center">
          <div className="p-0">
            <ResponsiveSidebar
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </div>
          <div>
            <Image
              src={Images.hero_logo}
              alt=""
              onClick={logoClickHandler}
              className="cursor-pointer"
            />
          </div>
        </div>

        {isLogin ? (
          <div className="relative">
            <input
              className="bg-[#F1F3F4]  h-[40px] rounded pl-14 text-xl font-light not-italic xl:w-[600px] lg:w-[400px] hidden md:flex "
              placeholder="Search"
            />
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2 left-4 hidden md:flex"
            >
              <path
                d="M20.625 22.375L13.625 15.375C13 15.875 12.2813 16.2708 11.4688 16.5625C10.6563 16.8542 9.79167 17 8.875 17C6.60417 17 4.6825 16.2138 3.11 14.6413C1.53667 13.0679 0.75 11.1458 0.75 8.875C0.75 6.60417 1.53667 4.68208 3.11 3.10875C4.6825 1.53625 6.60417 0.75 8.875 0.75C11.1458 0.75 13.0679 1.53625 14.6413 3.10875C16.2138 4.68208 17 6.60417 17 8.875C17 9.79167 16.8542 10.6563 16.5625 11.4688C16.2708 12.2813 15.875 13 15.375 13.625L22.4063 20.6562C22.6354 20.8854 22.75 21.1667 22.75 21.5C22.75 21.8333 22.625 22.125 22.375 22.375C22.1458 22.6042 21.8542 22.7188 21.5 22.7188C21.1458 22.7188 20.8542 22.6042 20.625 22.375ZM8.875 14.5C10.4375 14.5 11.7658 13.9533 12.86 12.86C13.9533 11.7658 14.5 10.4375 14.5 8.875C14.5 7.3125 13.9533 5.98417 12.86 4.89C11.7658 3.79667 10.4375 3.25 8.875 3.25C7.3125 3.25 5.98417 3.79667 4.89 4.89C3.79667 5.98417 3.25 7.3125 3.25 8.875C3.25 10.4375 3.79667 11.7658 4.89 12.86C5.98417 13.9533 7.3125 14.5 8.875 14.5Z"
                fill="#5F6368"
              />
            </svg>
          </div>
        ) : (
          ""
        )}

        <div>
          {isLogin ? (
            <div className="flex items-center gap-x-5">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0418 24.25H16.9584V21.3333H14.0418V24.25ZM15.5001 0.916666C13.585 0.916666 11.6886 1.29388 9.91928 2.02676C8.14995 2.75964 6.5423 3.83384 5.18811 5.18803C2.4532 7.92293 0.916748 11.6323 0.916748 15.5C0.916748 19.3677 2.4532 23.0771 5.18811 25.812C6.5423 27.1662 8.14995 28.2404 9.91928 28.9732C11.6886 29.7061 13.585 30.0833 15.5001 30.0833C19.3678 30.0833 23.0772 28.5469 25.8121 25.812C28.547 23.0771 30.0834 19.3677 30.0834 15.5C30.0834 13.5849 29.7062 11.6885 28.9733 9.9192C28.2404 8.14987 27.1662 6.54221 25.8121 5.18803C24.4579 3.83384 22.8502 2.75964 21.0809 2.02676C19.3116 1.29388 17.4152 0.916666 15.5001 0.916666ZM15.5001 27.1667C9.06883 27.1667 3.83342 21.9313 3.83342 15.5C3.83342 9.06875 9.06883 3.83333 15.5001 3.83333C21.9313 3.83333 27.1668 9.06875 27.1668 15.5C27.1668 21.9313 21.9313 27.1667 15.5001 27.1667ZM15.5001 6.75C13.953 6.75 12.4693 7.36458 11.3753 8.45854C10.2813 9.55251 9.66675 11.0362 9.66675 12.5833H12.5834C12.5834 11.8098 12.8907 11.0679 13.4377 10.5209C13.9847 9.97396 14.7265 9.66667 15.5001 9.66667C16.2736 9.66667 17.0155 9.97396 17.5625 10.5209C18.1095 11.0679 18.4168 11.8098 18.4168 12.5833C18.4168 15.5 14.0418 15.1354 14.0418 19.875H16.9584C16.9584 16.5938 21.3334 16.2292 21.3334 12.5833C21.3334 11.0362 20.7188 9.55251 19.6249 8.45854C18.5309 7.36458 17.0472 6.75 15.5001 6.75Z"
                  fill="#5F6368"
                />
              </svg>
              <div className="relative items-center hidden md:flex">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-6 top-2"
                >
                  <path
                    d="M4.16667 3.125H18.75L21.5698 5.94479C21.7652 6.1401 21.8749 6.40501 21.875 6.68125V20.8333C21.875 21.1096 21.7653 21.3746 21.5699 21.5699C21.3746 21.7653 21.1096 21.875 20.8333 21.875H4.16667C3.8904 21.875 3.62545 21.7653 3.4301 21.5699C3.23475 21.3746 3.125 21.1096 3.125 20.8333V4.16667C3.125 3.8904 3.23475 3.62545 3.4301 3.4301C3.62545 3.23475 3.8904 3.125 4.16667 3.125ZM7.29167 4.16667V9.375H16.6667V4.16667H7.29167ZM6.25 12.5V19.7917H18.75V12.5H6.25ZM13.5417 5.20833H15.625V8.33333H13.5417V5.20833Z"
                    fill="white"
                  />
                </svg>
                <button className="bg-main2 w-[120px] h-[40px]  pl-7 rounded-md text-white">
                  Save
                </button>
              </div>
              <div className="rounded-full bg-main2 w-8 h-8 sm:w-10 sm:h-10 text-white text-center pt-1 text-[18px] sm:text-[22px]  ">
                A
              </div>
              <svg
                width="8"
                height="26"
                viewBox="0 0 8 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.28126 13C7.28126 13.649 7.08882 14.2834 6.72827 14.823C6.36772 15.3626 5.85526 15.7831 5.25569 16.0315C4.65612 16.2798 3.99637 16.3448 3.35987 16.2182C2.72336 16.0916 2.1387 15.7791 1.67981 15.3202C1.22092 14.8613 0.908408 14.2766 0.7818 13.6401C0.655192 13.0036 0.720172 12.3439 0.968522 11.7443C1.21687 11.1448 1.63744 10.6323 2.17704 10.2717C2.71664 9.9112 3.35104 9.71875 4.00001 9.71875C4.87025 9.71875 5.70485 10.0645 6.32021 10.6798C6.93556 11.2952 7.28126 12.1298 7.28126 13ZM4.00001 6.90625C4.64898 6.90625 5.28338 6.71381 5.82298 6.35326C6.36258 5.99271 6.78314 5.48025 7.03149 4.88068C7.27984 4.28111 7.34482 3.62136 7.21821 2.98486C7.09161 2.34836 6.7791 1.76369 6.32021 1.3048C5.86131 0.84591 5.27665 0.533401 4.64015 0.406793C4.00365 0.280185 3.3439 0.345165 2.74433 0.593515C2.14475 0.841865 1.63229 1.26243 1.27174 1.80203C0.911194 2.34163 0.718752 2.97603 0.718752 3.625C0.718752 4.49524 1.06445 5.32984 1.67981 5.94519C2.29516 6.56055 3.12976 6.90625 4.00001 6.90625ZM4.00001 19.0938C3.35104 19.0938 2.71664 19.2862 2.17704 19.6468C1.63744 20.0073 1.21687 20.5198 0.968522 21.1193C0.720172 21.7189 0.655192 22.3787 0.7818 23.0152C0.908408 23.6517 1.22092 24.2363 1.67981 24.6952C2.1387 25.1541 2.72336 25.4666 3.35987 25.5932C3.99637 25.7198 4.65612 25.6549 5.25569 25.4065C5.85526 25.1581 6.36772 24.7376 6.72827 24.198C7.08882 23.6584 7.28126 23.024 7.28126 22.375C7.28126 21.5048 6.93556 20.6702 6.32021 20.0548C5.70485 19.4395 4.87025 19.0938 4.00001 19.0938Z"
                  fill="#5F6368"
                />
              </svg>
            </div>
          ) : (
            <button type="button" onClick={newAccHandler}>
              <h4 className="flex items-center text-subTitle text-main">
                Create your account
                <Image
                  src={Images.forward_arrow}
                  className="h-3 w-4  ml-2"
                  alt=""
                />
              </h4>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;