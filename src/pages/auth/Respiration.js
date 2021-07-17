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

const Respiration = (props) => {
   const classes = useStyles();
   return <div className={classes.main}>Respiration</div>;
};
export default Respiration;
