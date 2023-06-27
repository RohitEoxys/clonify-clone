"use client";
import React from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, Palette } from "@devexpress/dx-react-chart";
import {
  Box,
  FormControl,
  Icon,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Appstore, GooglePlay, Users } from "../../../../assets/SVG/SVG";

const data = [
  { year: "Dec", population: 3000 },
  { year: "Jan", population: 4000 },
  { year: "Feb", population: 3800 },
  { year: "Mar", population: 2500 },
  { year: "Apr", population: 4000 },
  { year: "May", population: 3300 },
  { year: "Jun", population: 1000 },
];
const useStyles = makeStyles({
  inputLablel: {
    "&.MuiInputLabel-standard": {
      color: "#5F6368",
      fontWeight: "500",
      fontSize: "16px",
    },
  },
});

const Stats = () => {
  const styles = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={`shadow-a p-[10px]`}>
      <Chart data={data} height={400}>
        {/* Header */}
        <div className="flex justify-between items-center px-[8px] mb-[12px] items-baseline">
          <div className="text-main font-semibold">Traffic</div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className={styles.inputLablel}
            >
              Last year
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
              size="small"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* subHeader */}
        <div className="bg-[#F8FAFE] flex items-center p-[10px] justify-between mx-[8px] mb-[25px]">
          <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
            <Icon component={GooglePlay} />
            <div className="!ml-[0px]  sm:ml-[10px] ">
              <div className="text-[#1B2952] font-semibold text-[15px] lg:text-[15px]">
                12,494
              </div>
              <div className="text-main font-medium text-xSmall lg:text-[13px]">
                android downloads
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:file:items-center">
            <Icon component={Appstore} />
            <div className="!ml-[0px]  sm:ml-[10px]">
              <div className="text-[#1B2952] font-semibold text-[15px] lg:text-[15px]">
                8,494
              </div>
              <div className="text-main font-medium text-xSmall lg:text-[13px]">
                ios downloads
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
            <Icon component={Users} />
            <div className="!ml-[0px]  sm:ml-[10px]">
              <div className="text-[#1B2952] font-semibold text-[15px] lg:text-[15px]">
                22,494
              </div>
              <div className="text-main font-medium text-xSmall lg:text-[13px]">
                total unique users
              </div>
            </div>
          </div>
        </div>
        <ArgumentAxis />
        <ValueAxis max={7} />
        <Palette scheme={["#A7BEFF"]} />
        <BarSeries valueField="population" argumentField="year" />
        <Animation />
      </Chart>
    </Box>
  );
};

export default Stats;
