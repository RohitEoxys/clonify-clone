import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
    "&.MuiTab-root": {
      fontWeight: 400,
      color: "#5F6368",
      textTransform: "capitalize",
    },
  },
  tabs: {
    "&.MuiTabs-root": {
      borderBottom: "0.5px solid #5F636891",
      display: "flex",
      justifyContent: "space-between",
    },
    "&.MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
  },
});

export default function SubHeader({ tabsArray, setCurrentTab }) {
  const styles = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabClickHandler = (value) => {
    setCurrentTab(value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        marginTop: "10px",
        width: "100%",
      }}
    >
      <Tabs
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable  tabs example"
        value={value}
        classes={{ flexContainer: styles.tabs, root: styles.tabs }}
      >
        {tabsArray?.map((item, index) => (
          <Tab
            label={item}
            className={styles.tab}
            onClick={() => tabClickHandler(item)}
            key={index}
          />
        ))}
      </Tabs>
    </Box>
  );
}
