import { useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import { getPulseOXData } from "./selectors";

export const usePulseOXData = () => {
   const dispatch = useDispatch();

   const pulseoxData = useSelector(getPulseOXData);

   const clearPulseOXData = () => dispatch(actions.clearPulseOXData());
   const setPulseOXData = (data) => dispatch(actions.setPulseOXData(data));
   const populatePulseOXData = () => dispatch(actions.populatePulseOXData());

   return {
      pulseoxData,

      clearPulseOXData,
      setPulseOXData,
      populatePulseOXData,
   };
};
