import Image from "next/image";
import React from "react";
import Images from "../../Images/Images";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    "&.MuiButton-contained": {
      backgroundColor: "#1967D2",
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
});
const NewOptionLayout = () => {
  const styles = useStyles();
  return (
    <>
      <div className="px-4">
        <h4 className="py-6 text-main text-[16px] md:text-[20px]">
          Design your App Menu, integrate social media pages and manage the
          overall settings of your app.
          <span className="text-main2"> Learn More</span>
        </h4>
        <div className="flex md:gap-16 flex-col md:flex-row">
          <h4 className="text-main text-[20px] mt-4">List of videos :</h4>
        </div>
        <div className="flex gap-8 pt-5 flex-wrap justify-center md:justify-start">
          <Image src={Images.new_layout_1} />
          <Image src={Images.new_layout_2} />
          <Image src={Images.new_layout_3} />
        </div>
        <div className="flex md:gap-16 md:flex-row mt-14 justify-between w-90 items-center md:pr-14">
          <h4 className="text-main text-[20px] mt-4">
            Single Video Screen : :
          </h4>
          <Button variant="contained" className={styles.button}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="material-symbols:edit">
                <path
                  id="Vector"
                  d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
                  fill="white"
                />
              </g>
            </svg>
            Edit
          </Button>
        </div>
        <div className="flex gap-8 pt-5 flex-wrap justify-center md:justify-start ">
          <Image src={Images.new_layout_4} />
          <Image src={Images.new_layout_5} />
          <Image src={Images.new_layout_6} />
        </div>
      </div>
    </>
  );
};

export default NewOptionLayout;
