import { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserData } from "../../common/state/user/hooks";
import {
   ROUTE_404,
   ROUTE_LOGIN,
   ROUTE_ROOT,
   ROUTE_SIGNUP,
   ROUTE_VERIFY,
   ROUTE_FORGOT,
   ROUTE_HOME,
   UNAUTHORIZED_ROUTES,
   PRIVATE_ROUTES,
} from "../../constants/routes";
import { isRoute } from "../utilities/Functions";

const RedirectContainer = (props) => {
   const history = useHistory();
   const { isLoggedIn } = useUserData();

   // useEffect to control redirects for logged in users
   useEffect(() => {
      if (!isLoggedIn) return;
      console.log("LOGGED IN");

      if (isRoute(ROUTE_ROOT, true) || isRoute(ROUTE_LOGIN)) {
         history.push(ROUTE_HOME);
         return;
      }

      const privateRoute = PRIVATE_ROUTES.find((route) => isRoute(route));
      if (!isRoute(ROUTE_404) && !isLoggedIn) {
         history.push(ROUTE_404);
         return;
      }
   }, [isLoggedIn, history]);

   // useEffect to control redirects for non-logged in users
   useEffect(() => {
      if (isLoggedIn) return;
      console.log("NOT LOGGED IN");

      if (UNAUTHORIZED_ROUTES.some((route) => isRoute(route))) {
         return;
      } else {
         history.push(ROUTE_LOGIN);
      }
   }, [isLoggedIn, history]);

   return props.children;
};

export default RedirectContainer;
