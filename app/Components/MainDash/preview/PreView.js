import Image from "next/image";
import React from "react";
import Images from "../../Images/Images";

const PreView = () => {
  return (
    <>
      <div className=" text-center pb-10 pt-5 w-[100%] md:w-[80%]">
        <div>
          <h4 className="text-[20px] text-black font-normal">
            Grant Access And Verify Ownership
          </h4>
          <h6 className="text-main py-4 text-[17px]">
            This step is mandatory to sync your website with the mobile app.
          </h6>
        </div>
        <div className="flex justify-center">
          <Image src={Images.preview_main} className="mt-6" />
        </div>
        <div>
          <h6 className="text-main pt-14 pb-14 text-[17px]">
            Install the AppMySite WP plugin and verify it in to connect website
            with app.
          </h6>
          <button className="bg-main2 rounded text-white w-32 h-8">
            Create App{" "}
          </button>
        </div>
        <div>
          <p className="text-main text-base leading-7 mt-20 text-[16px] px-5">
            There are a few things (App Icon, Splash screen, Social login, Push
            Notifications and App Monetisation) that you cannot preview until
            you install your app on a real device.
          </p>
        </div>
      </div>
    </>
  );
};

export default PreView;
