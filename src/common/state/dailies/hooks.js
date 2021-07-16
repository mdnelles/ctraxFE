import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getDailiesData } from "./selectors";

export const useDailiesData = () => {
   const dispatch = useDispatch();

   const dailiesData = useSelector(getDailiesData);

   const clearDailiesData = () => dispatch(actions.clearDailiesData());
   const setDailiesData = (data) => dispatch(actions.setDailiesData(data));
   const populateDailiesData = () => dispatch(actions.populateDailiesData());

   return {
      dailiesData,

      clearDailiesData,
      setDailiesData,
      populateDailiesData,
   };
};
