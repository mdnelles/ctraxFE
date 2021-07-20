import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEpochData } from "../../common/state/epoch/hooks";

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
   },
   secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
   },
   main: {
      minHeight: window.innerHeight,
   },
   span1: {
      color: "yellow",
      display: "inline-block",
   },
}));

const Epoch = (props) => {
   const classes = useStyles();
   const { epochData } = useEpochData();

   const Activity = (props) => {
      const { val, intensity } = props;
      return (
         <div className={classes.span1}>
            {val} - {intensity}
         </div>
      );
   };

   let objs = epochData;
   objs.sort((a, b) => a.start_time.localeCompare(b.start_time));

   React.useEffect(() => {}, [objs]);

   return (
      <div className={classes.main}>
         <h4>Epoch</h4>
         {objs.map((o, index) => (
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
               >
                  <Typography className={classes.heading}>
                     {`${o.start_time} - ${o.end_time} `}
                     <Activity val={o.activity_type} intensity={o.intensity} />
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     <ul>
                        <li>{o.active_calories} calories</li>
                        <li>{o.active_time} (s)</li>
                        <li>{o.distance} distance</li>
                        <li>{o.duration} duration</li>
                        <li>{o.max_motion_intensity} max motion intensity</li>
                        <li>{o.mean_motion_intensity} mean motion intensity</li>
                        <li>{o.met} met</li>
                        <li>{o.steps} steps</li>
                     </ul>
                  </Typography>
               </AccordionDetails>
            </Accordion>
         ))}
      </div>
   );
};
export default Epoch;
