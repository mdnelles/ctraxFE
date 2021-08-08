import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import LineSimple from "../../components/graphs/LineSimple";
import { useRespirationData } from "../../common/state/respiration/hooks";

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
   const { respirationData } = useRespirationData();
   const [startPeriod, setStartPeriod] = useState(0);
   const [data, setData] = useState([]);

   const handleChange = (event) => {
      let temp = "",
         arr = [];
      setStartPeriod(event.target.value);
      console.log(event.target.value);
      respirationData.forEach((e) => {
         if (e.start_time === event.target.value)
            temp = e.timeoffset_epoch_breath;
      });

      for (const [duration, stage] of Object.entries(temp)) {
         arr.push({ duration: parseInt(duration), stage: stage });
      }
      setData(arr);
      console.log(arr);
   };

   useEffect(() => {
      //console.log(respirationData);
   }, [data, respirationData]);

   return (
      <div className={classes.main}>
         <h4>Respiration</h4>

         <FormControl className={classes.formControl}>
            <InputLabel htmlFor='period'>Time Period</InputLabel>

            <Select
               native
               onChange={handleChange}
               inputProps={{
                  name: "period",
                  id: "period",
               }}
            >
               <option>Select a time period</option>
               {respirationData.map((r) => (
                  <option value={r.start_time} key={r.start_time}>
                     {r.start_time} -- {r.end_time}
                  </option>
               ))}
            </Select>
         </FormControl>
         <div style={{ padding: 3 }} />
         <LineSimple
            chartName='lsc'
            title='Respiration'
            header={startPeriod}
            dateDisplay={startPeriod}
            height={350}
            data={data}
            valueAxisLabel='Breaths / minute'
         />
      </div>
   );
};
export default Respiration;
