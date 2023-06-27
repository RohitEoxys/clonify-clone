import React from "react";

const Connectivity = () => {
  return (
    <>
      <div className="pt-1 pb-10 w-[100%] md:w-[80%] p-6 text-center sm:text-left">
        <div>
          <p className="text-main py-4 text-[16px]">
            Connectivity between your website and app to identify any issues.{" "}
            <span className="text-main2">Learn More</span>
          </p>
        </div>
        <div className="flex justify-center"></div>
        <div>
          <p className="text-black pt-4 pb-1 font-normal text-[20px]">
            Select channels that you want to show in your mobile app
          </p>
          <hr className="w-full  md:w-6/12 mt-2 border-main" />
        </div>
        <div>
          <p className="text-main text-base leading-7 mt-10 text-[20px]">
            We have not found any youtube channel under this account.
          </p>
        </div>
        <div className="flex mt-10 gap-4 items-center flex-col sm:flex-row">
          <div className="relative items-center">
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
          <span className=" text-main">Or</span>
          <button className="bg-main w-[200px] h-[40px]  rounded-md text-white">
            Change Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Connectivity;
