"use client";
import React from "react";
import Footer from "../Common/Footer/Footer";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const signinHandler = () => {
    router.push("./login");
  };
  const passwordHandler = () => {
    router.push("./forgot-password");
  };

  return (
    <div>
      <div className="home_wrapper m-auto px-5 py-11 border-2  rounded sm:w-full md:w-96 border-bod mt-[10%] mb-[10%]">
        <h4 className="text-center text-[20px] font-semibold">
          Create your Cloneify Account
        </h4>
        <h6 className="opacity-70 text-md my-5 text-main text-center">
          to continue to build your app
        </h6>
        <form>
          <div className="flex justify-between mb-5">
            <input
              type="text"
              placeholder="First Name"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-36 border-bod"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-36 border-bod"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-full border-bod"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className=" outline-0 text-black h-[40px] border-2 mt-5 bg-[#f1f3f4] rounded-[8px] pl-4 w-full align border-bod"
            />
          </div>
          <div className="flex justify-center mt-5 "></div>
        </form>
        <h6 className="opacity-70 text-base text-main text-left">
          You Can use letters, numbers & periods
        </h6>
        <form>
          <div className="flex justify-between my-5">
            <input
              type="text"
              placeholder="First Name"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-36 border-bod"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" outline-0 text-black h-[40px] border-2 bg-[#f1f3f4] rounded-[8px] pl-4 w-36 border-bod"
            />
          </div>
        </form>
        <h6 className="opacity-70 text-sm text-main text-left">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </h6>
        <div className="flex items-center my-4">
          <input type="checkbox" className="w-5 h-5" />{" "}
          <h6 className="opacity-70 text-sm text-main text-left ml-1">
            I’ve read and accept the{" "}
            <span className=" underline">terms & conditions</span>
          </h6>
        </div>
        <div className="flex justify-between mt-5 items-center ">
          <button
            className="opacity-70 text-sm text-main text-left"
            onClick={signinHandler}
            type="button"
          >
            Sign In Instead
          </button>
          <button
            className="w-40  border-2 rounded-[34px] border-main2 h-[40px] text-sm text-main2 "
            type="button"
            onClick={passwordHandler}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
