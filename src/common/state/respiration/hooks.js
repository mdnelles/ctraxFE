import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getRespirationData } from "./selectors";

export const useRespirationData = () => {
   const dispatch = useDispatch();

   const respirationData = useSelector(getRespirationData);

   const clearRespirationData = () => dispatch(actions.clearRespirationData());
   const setRespirationData = (data) =>
      dispatch(actions.setRespirationData(data));
   const populateRespirationData = () =>
      dispatch(actions.populateRespirationData());

   return {
      respirationData,

      clearRespirationData,
      setRespirationData,
      populateRespirationData,
   };
};
