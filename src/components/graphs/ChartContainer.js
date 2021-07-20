import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { forwardRef } from "react";

am4core.useTheme(am4themes_animated);

const useStyles = makeStyles((theme) => ({
   root: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "#555",
   },
   chart: {
      "padding": 0,
      "transition": "background .1s ease",
      "borderRadius": 6,
      "& > div": {
         borderRadius: 6,
      },
   },
   moreButton: {
      "position": "absolute",
      "top": 13,
      "right": 10,
      "color": "#747C83",
      "fontSize": 24,
      "cursor": "pointer",
      "zIndex": 5,
      "transition": "color .2s ease",
      "&:hover": {
         color: "#324D66",
      },
   },
   headerWrapper: {
      padding: "15px 22px 0",
      position: "relative",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      minHeight: 63,
   },
   headerWrapperColumn: {
      padding: `${theme.spacing(1)}px 22px 0`,
   },
   header: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      flex: 1,
   },
   headerExpanded: {
      flex: 2,
   },
   titleAndDate: {
      display: "flex",
      flexDirection: "column",
      marginRight: 25,
   },
   title: {
      fontSize: 18,
      lineHeight: "24px",
      fontWeight: 400,
      margin: "0 10px 0 0",
   },
   date: {
      color: "#747C83",
      fontSize: 14,
      lineHeight: "19px",
   },
   headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
   },
   legend: {
      height: "100%",
      maxHeight: 48,
      flex: 1,
      // minWidth: 'max-content'
   },
}));

export const ChartContainer = forwardRef((props, ref) => {
   const {
      chartName,
      width,
      height,
      title,
      noDate = false,
      header = null,
      legendName,
      dateDisplay,
   } = props;
   const classes = useStyles();

   return (
      <div ref={ref} className={classes.root}>
         <div className={clsx(classes.headerWrapper)}>
            <div
               className={clsx(classes.header, {
                  [classes.headerExpanded]: !!header,
               })}
            >
               <div className={classes.titleAndDate}>
                  {title && <h3 className={classes.title}>{title}</h3>}
                  {!noDate && (
                     <span className={classes.date}>
                        {dateDisplay || "DATE"}
                     </span>
                  )}
               </div>

               {header && (
                  <div className={classes.headerContainer}>{header}</div>
               )}
            </div>

            {legendName && <div id={legendName} className={classes.legend} />}
         </div>

         {/* {!moreButtonDisabled && <MoreIcon className={classes.moreButton} onClick={onClick} />} */}
         <div
            id={chartName}
            className={classes.chart}
            style={{ width, height: +height - 63 }}
         />
      </div>
   );
});
