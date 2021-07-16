import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getEpochData } from "./selectors";

export const useEpochData = () => {
   const dispatch = useDispatch();

   const epochData = useSelector(getEpochData);

   const clearEpochData = () => dispatch(actions.clearEpochData());
   const setEpochData = (data) => dispatch(actions.setEpochData(data));
   const populateEpochData = () => dispatch(actions.populateEpochData());

   return {
      epochData,

      clearEpochData,
      setEpochData,
      populateEpochData,
   };
};
