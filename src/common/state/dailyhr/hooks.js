import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getDailhrData } from "./selectors";

export const useDailyhrData = () => {
   const dispatch = useDispatch();

   const dailyhrData = useSelector(getDailhrData);

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
