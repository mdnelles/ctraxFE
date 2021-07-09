import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isRoute } from "../../../components/utilities/Functions";
import { loginUser, userClearData } from "./actions";
import { getUserData } from "./selectors";

export const useUserData = () => {
   const dispatch = useDispatch();
   const { email, token, firstName, lastName, id } = useSelector(getUserData);
   const isLoggedIn = !!email && !!token;

   const login = useCallback(
      (email, password) => dispatch(loginUser(email, password)),
      [dispatch]
   );
   const logout = useCallback(() => dispatch(userClearData()), [dispatch]);

   return {
      email,
      token,
      isLoggedIn,
      firstName,
      lastName,
      id,

      login,
      logout,
   };
};
