import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getDailesData } from "./selectors";

export const useDailyhrData = () => {
   const dispatch = useDispatch();

   const dailyhrData = useSelector(getDailesData);

   const clearDailyhrData = dispatch(actions.clearDailyhrData());
   const setDailyhrData = dispatch(actions.clearDailyhrData(data));
   const populateDailyhrData = dispatch(actions.populateDailyhrData());

   return {
      dailyhrData,

      clearDailyhrData,
      setDailyhrData,
      populateDailyhrData,
   };
};
