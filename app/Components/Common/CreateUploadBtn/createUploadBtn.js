import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  disabledButton: {
    "&.MuiButton-root": {
      fontWeight: 500,
      fontSize: "15px",
      background: "#e8e8e8",
      color: "#5F6368",
      padding: "0 41px",
      lineHeight: "30px",
      textTransform: "capitalize",
    },
  },
  enabledButton: {
    "&.MuiButton-root": {
      fontWeight: 500,
      fontSize: "15px",
      background: "#c8dbf4",
      color: "#1967D2",
      padding: "0 41px",
      lineHeight: "30px",
      textTransform: "capitalize",
    },
  },
  mobileButton: {
    "@media (max-width: 600px)": {
      "&.MuiButton-root": {
        padding: "0 10px",
      },
    },
  },
});

const CreateUploadBtn = ({ setCurrentTab, initialActiveTab }) => {
  const styles = useStyles();
  const [active, setActive] = useState(initialActiveTab);

  const buttonClickHandler = (selectedValue) => {
    setActive(selectedValue);
    setCurrentTab(selectedValue);
  };

  return (
    <div className="">
      <ButtonGroup
        disableElevation
        variant="text"
        aria-label="Disabled elevation buttons"
        size="small"
      >
        <Button
          classes={{
            root: `${
              active === "create" ? styles.enabledButton : styles.disabledButton
            } ${styles.mobileButton}`,
          }}
          onClick={() => buttonClickHandler("create")}
        >
          Create
        </Button>
        <Button
          classes={{
            root: `${
              active === "upload" ? styles.enabledButton : styles.disabledButton
            } ${styles.mobileButton}`,
          }}
          onClick={() => buttonClickHandler("upload")}
        >
          Upload
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CreateUploadBtn;
