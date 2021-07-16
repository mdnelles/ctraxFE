import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getDailesData } from "./selectors";

export const useDailiesData = () => {
   const dispatch = useDispatch();

   const dailiesData = useSelector(getDailesData);

   const clearDailiesData = dispatch(actions.clearDailiesData());
   const setDailiesData = dispatch(actions.clearDailiesData(data));
   const populateDailiesData = dispatch(actions.populateDailiesData());

   return {
      dailiesData,

      clearDailiesData,
      setDailiesData,
      populateDailiesData,
   };
};
