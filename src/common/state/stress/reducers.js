import {
   CLEAR_STRESS_DATA,
   SET_STRESS_DATA,
   POPULATE_STRESS_DATA,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_STRESS_DATA:
         return { ...state, ...action.data };

      case CLEAR_STRESS_DATA:
         return { ...initialState };

      case POPULATE_STRESS_DATA:
         return [];

      default:
         return state;
   }
};
