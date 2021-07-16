import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getStressData } from "./selectors";

export const useStressData = () => {
   const dispatch = useDispatch();

   const stressData = useSelector(getStressData);

   const clearStressData = () => dispatch(actions.clearStressData());
   const setStressData = (data) => dispatch(actions.setStressData(data));
   const populateStressData = () => dispatch(actions.populateStressData());

   return {
      stressData,

      clearStressData,
      setStressData,
      populateStressData,
   };
};
