"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Footer from "../Common/Footer/Footer";
import { setLogin } from "../../redux/features/Auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const mailClickHandler = () => {
    dispatch(setLogin(true));
    router.push("./create-channel");
  };

  const signupHandler = () => {
    router.push("./signup");
  };

  return (
    <div>
      <div className="mt-[7.1%] mb-[7.1%]">
        <div className="home_wrapper m-auto px-9 py-11 border-2  rounded sm:w-full md:w-96 border-bod">
          <h4 className="text-center text-lg font-semibold">
            Login to Cloneify
          </h4>
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="attsoftware@gmail.com"
                className="w-full outline-0 text-black  h-[40px] border-2 my-4 bg-[#e8f0fb] rounded-[8px] pl-10 border-bod"
              />
              <i className="fa fa-user absolute top-7 left-4"></i>
            </div>

            <button
              className="w-full text-sm border-2 rounded-3xl border-transparent bg-[#4CAF50] text-white p-1 h-[40px]"
              onClick={mailClickHandler}
              type="button"
            >
              Continue with Email
            </button>
          </form>
          <div className="flex items-center my-3 w-full justify-between ">
            <hr className="w-2/5 border border-bod" />
            or <hr className="w-2/5 border border-bod" />
          </div>
          <button
            className="w-full relative mt-1 text-sm border-2 rounded-3xl border-transparent bg-[#1976D2] text-white p-1 h-[40px]"
            onClick={mailClickHandler}
          >
            Continue with Google
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[3px] left-1"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M29.7128 18.4599H28.8737V18.4167H19.4987V22.5833H25.3857C24.5268 25.0089 22.219 26.75 19.4987 26.75C16.0471 26.75 13.2487 23.9516 13.2487 20.5C13.2487 17.0484 16.0471 14.25 19.4987 14.25C21.0919 14.25 22.5414 14.8511 23.6451 15.8328L26.5914 12.8865C24.731 11.1526 22.2424 10.0833 19.4987 10.0833C13.7461 10.0833 9.08203 14.7474 9.08203 20.5C9.08203 26.2526 13.7461 30.9167 19.4987 30.9167C25.2513 30.9167 29.9154 26.2526 29.9154 20.5C29.9154 19.8016 29.8435 19.1198 29.7128 18.4599Z"
                fill="#FFC107"
              />
              <path
                d="M10.2852 15.6516L13.7076 18.1615C14.6336 15.8688 16.8763 14.25 19.5008 14.25C21.094 14.25 22.5435 14.8511 23.6471 15.8328L26.5935 12.8865C24.7331 11.1526 22.2445 10.0833 19.5008 10.0833C15.4997 10.0833 12.0299 12.3422 10.2852 15.6516Z"
                fill="#FF3D00"
              />
              <path
                d="M19.5 30.9167C22.1906 30.9167 24.6354 29.887 26.4839 28.2125L23.2599 25.4844C22.1789 26.3064 20.8581 26.7511 19.5 26.75C16.7906 26.75 14.4901 25.0224 13.6234 22.6115L10.2266 25.2286C11.9505 28.6021 15.4516 30.9167 19.5 30.9167Z"
                fill="#4CAF50"
              />
              <path
                d="M29.7141 18.4599H28.875V18.4167H19.5V22.5833H25.387C24.9762 23.7377 24.2361 24.7464 23.2583 25.4849L23.2599 25.4838L26.4839 28.212C26.2557 28.4193 29.9167 25.7083 29.9167 20.5C29.9167 19.8016 29.8448 19.1198 29.7141 18.4599Z"
                fill="#1976D2"
              />
            </svg>
          </button>
          <button
            className="w-full my-4 text-sm border-2 rounded-3xl border-black bg-[#fff] text-black p-1  h-[40px]"
            onClick={mailClickHandler}
          >
            <i className="fa-brands fa-apple mr-3 text-xl"></i>
            Continue with Apple
          </button>

          <div className="flex items-center w-full justify-between text-[12px] text-main mt-[70px]">
            <hr className="w-14 bg-primary border border-bod" />
            Don’t have an Clonify account?{" "}
            <hr className="w-14 border border-bod" />
          </div>
          <div className="flex justify-center mt-5 ">
            <button
              className="w-2/4 m-auto border-2 rounded-[34px] border-[#4CAF50] h-[40px] text-sm text-[#4CAF50]"
              type="button"
              onClick={signupHandler}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
