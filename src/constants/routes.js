import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { AppWrapper } from "../AppWrapper";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgot from "../pages/Forgot";
import Verify from "../pages/Verify";

import Home from "../pages/auth/Home";
import Logs from "../pages/auth/Logs";
import Users from "../pages/auth/Users";

import Dailies from "../pages/auth/Dailies";
import Dailyhr from "../pages/auth/Dailyhr";
import Epoch from "../pages/auth/Epoch";
import Pulse from "../pages/auth/Pulse";
import Respiration from "../pages/auth/Respiration";
import Sleep from "../pages/auth/Sleep";
import Stress from "../pages/auth/Stress";
import MyProfile from "../pages/auth/MyProfilePage/MyProfilePage";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const ROUTE_ROOT = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_SIGNUP = "/signup";
export const ROUTE_FORGOT = "/forgot";
export const ROUTE_VERIFY = "/verify";

export const ROUTE_HOME = "/auth/home";
export const ROUTE_LOGS = "/auth/logs";
export const ROUTE_USERS = "/auth/users";
export const ROUTE_MY_PROFILE = "/auth/profile";

export const ROUTE_DAILIES = "/auth/dalies";
export const ROUTE_DAILYHR = "/auth/dailyhr";
export const ROUTE_EPOCH = "/auth/epoch";
export const ROUTE_PULSE = "/auth/pulse";
export const ROUTE_RESPIRATION = "/auth/respiration";
export const ROUTE_SLEEP = "/auth/sleep";
export const ROUTE_STRESS = "/auth/stress";

export const ROUTE_404 = "/page-not-found";
export const ROUTE_ALL = "*";

export const PRIVATE_ROUTES = [
   ROUTE_HOME,
   ROUTE_LOGS,
   ROUTE_USERS,
   ROUTE_MY_PROFILE,
   ROUTE_DAILIES,
   ROUTE_DAILYHR,
   ROUTE_EPOCH,
   ROUTE_PULSE,
   ROUTE_RESPIRATION,
   ROUTE_SLEEP,
   ROUTE_STRESS,
];
export const UNAUTHORIZED_ROUTES = [
   ROUTE_LOGIN,
   ROUTE_VERIFY,
   ROUTE_SIGNUP,
   ROUTE_FORGOT,
];

export const routes = [
   {
      path: ROUTE_LOGIN,
      component: Login,
   },
   {
      path: ROUTE_VERIFY,
      component: Verify,
   },
   {
      path: ROUTE_SIGNUP,
      component: Signup,
   },
   {
      path: ROUTE_FORGOT,
      component: Forgot,
   },
   {
      path: ROUTE_ROOT,
      component: AppWrapper,
   },
];

export const routesAuthenticated = [
   {
      path: ROUTE_HOME,
      component: Home,
   },
   {
      path: ROUTE_LOGS,
      component: Logs,
   },
   {
      path: ROUTE_DAILIES,
      component: Dailies,
   },
   {
      path: ROUTE_DAILYHR,
      component: Dailyhr,
   },
   {
      path: ROUTE_EPOCH,
      component: Epoch,
   },
   {
      path: ROUTE_PULSE,
      component: Pulse,
   },
   {
      path: ROUTE_RESPIRATION,
      component: Respiration,
   },
   {
      path: ROUTE_SLEEP,
      component: Sleep,
   },
   {
      path: ROUTE_STRESS,
      component: Stress,
   },
   {
      path: ROUTE_USERS,
      component: Users,
   },
   {
      path: ROUTE_MY_PROFILE,
      component: MyProfile,
      exact: true,
   },
   /*    {
      path: ROUTE_404,
      component: NotFoundPage,
      exact: true,
   },
  {
      path: ROUTE_ALL,
      render: () => (
         console.log("redirect to 404"), (<Redirect to={ROUTE_404} />)
      ), 
   },*/
];

export const renderRoutes = (routes) =>
   routes.map((props) => <Route key={props.path} {...props} />);

export const renderRoutesWithSwitch = (routes) => (
   <Switch>{renderRoutes(routes)}</Switch>
);
