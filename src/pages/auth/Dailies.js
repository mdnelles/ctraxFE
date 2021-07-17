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

const Dailies = (props) => {
   const classes = useStyles();
   return <div className={classes.main}>Dailies</div>;
};
export default Dailies;
