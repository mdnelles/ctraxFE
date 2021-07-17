import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
   },
   main: {
      minHeight: window.innerHeight,
   },
}));

const Dailyhr = (props) => {
   const classes = useStyles();
   return <div className={classes.main}>DailyHR</div>;
};
export default Dailyhr;
