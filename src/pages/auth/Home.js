import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useDailyhrData } from "../../common/state/dailyhr/hooks";
import { useDailiesData } from "../../common/state/dailies/hooks";
import { useEpochData } from "../../common/state/epoch/hooks";
import { usePulseOXData } from "../../common/state/pulseox/hooks";
import { useRespirationData } from "../../common/state/respiration/hooks";
import { useSleepData } from "../../common/state/sleep/hooks";
import { useStressData } from "../../common/state/stress/hooks";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
   },
   main: {
      minHeight: window.innerHeight,
   },
}));

const Home = (props) => {
   const classes = useStyles();
   const { populateDailyhrData } = useDailyhrData();
   const { populateDailiesData } = useDailiesData();
   const { populateEpochData } = useEpochData();
   const { populatePulseOXData } = usePulseOXData();
   const { populateRespirationData } = useRespirationData();
   const { populateSleepData } = useSleepData();
   const { populateStressData } = useStressData();

   React.useEffect(() => {
      populateDailyhrData();
      populateDailiesData();
      populateEpochData();
      populatePulseOXData();
      populateRespirationData();
      populateSleepData();
      populateStressData();
   }, []);

   return <div className={classes.main}>this is Home</div>;
};
export default Home;
