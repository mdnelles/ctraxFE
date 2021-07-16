import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getSleepData } from "./selectors";

export const useSleepData = () => {
   const dispatch = useDispatch();

   const sleepData = useSelector(getSleepData);

   const clearSleepData = () => dispatch(actions.clearSleepData());
   const setSleepData = (data) => dispatch(actions.setSleepData(data));
   const populateSleepData = () => dispatch(actions.populateSleepData());

   return {
      sleepData,

      clearSleepData,
      setSleepData,
      populateSleepData,
   };
};
