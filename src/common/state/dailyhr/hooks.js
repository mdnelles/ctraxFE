import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getDailyhrData } from "./selectors";

export const useDailyhrData = () => {
   const dispatch = useDispatch();

   const dailyhrData = useSelector(getDailyhrData);

   const clearDailyhrData = () => dispatch(actions.clearDailyhrData());
   const setDailyhrData = (data) => dispatch(actions.setDailyhrData(data));
   const populateDailyhrData = () => dispatch(actions.populateDailyhrData());

   return {
      dailyhrData,

      clearDailyhrData,
      setDailyhrData,
      populateDailyhrData,
   };
};
