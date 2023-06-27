import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const dotIcon = "bg-[#c4c5c7] h-[15px] w-[15px] rounded-full";

const useStyles = makeStyles({
  button: {
    "&.MuiButton-contained": {
      backgroundColor: "#1967D2",
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
});

const Information = ({ heading, heading2, details }) => {
  const styles = useStyles();

  return (
    <div>
      <Typography variant="h6" className="text-[20px]">
        {heading}
      </Typography>
      <Typography
        variant="subtitle1"
        className="!text-main !my-[10px] !text-[20px]"
      >
        {heading2}
      </Typography>
      {details?.map((item) => {
        return (
          <div className="flex items-center mb-[26px]">
            <div className={dotIcon}></div>
            <Typography className="text-[#c4c5c7] !font-normal !text-[20px] !ml-[15px]">
              {item?.title}
            </Typography>
          </div>
        );
      })}

      <Button variant="contained" className={styles.button}>
        Upgrade Plan
      </Button>
    </div>
  );
};

export default Information;
