import { USER_CLEAR_DATA, USER_SET_DATA } from "./actions";

const initialState = {
   email: null,
   firstName: "",
   lastName: "",
   id: null,
   token: null,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case USER_SET_DATA:
         return { ...state, ...action.data };

      case USER_CLEAR_DATA:
         return { ...initialState };

      default:
         return state;
   }
};
