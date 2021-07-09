import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
   Drawer,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import clsx from "clsx";
import {
   APPBAR_HEIGHT,
   DRAWER_WIDTH,
   DRAWER_WIDTH_TOGGLED,
} from "../../constants/layout";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import {
   ROUTE_DASHBOARD,
   ROUTE_HOME,
   ROUTE_HISTORY_LOGS,
   ROUTE_CHARTS,
   ROUTE_FUNDS,
} from "../../constants/routes";
import { goTo, isRoute } from "../utilities/Functions";
import { useHistory } from "react-router";
import { useUserData } from "../../common/state/user/hooks";

const useStyles = makeStyles((theme) => ({
   root: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: "nowrap",
   },
   drawerOpen: {
      width: DRAWER_WIDTH,
      borderRight: 0,
      boxShadow: "0px 2px 4px #00000054",
      transition: theme.transitions.create("width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerClose: {
      "transition": theme.transitions.create("width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      "overflowX": "hidden",
      "width": DRAWER_WIDTH_TOGGLED,
      "& $navListItem": {
         padding: "20px 22px",
         justifyContent: "center",
      },
      "& $navListItemAvatar": {
         marginRight: 0,
      },
      "& $navListItemText": {
         opacity: 0,
         flex: 0,
      },
   },
   navList: {
      marginTop: APPBAR_HEIGHT,
      padding: "23px 0 38px",
   },
   navListItem: {
      padding: "20px 20px 20px 38px",
      color: theme.palette.primary.main,
      marginBottom: 15,
      transition: theme.transitions.create("all"),
   },
   navListItemActive: {
      color: "#99C2E5",
   },
   navListItemAvatar: {
      width: 24,
      minWidth: "initial",
      display: "flex",
      alignItems: "center",
      marginRight: 22,
      transition: theme.transitions.create("margin-right"),
   },
   navListItemText: {
      margin: 0,
      transition: theme.transitions.create(["opacity", "flex"]),
   },
}));

const LayoutSidebar = (props) => {
   const { open } = props;
   const classes = useStyles();
   const history = useHistory();
   const links = [
      {
         label: "Home",
         icon: <HomeIcon />,
         href: ROUTE_HOME,
         onClick: (e) => goTo(e, ROUTE_HOME, history),
      },
      {
         label: "History",
         icon: <HistoryIcon />,
         href: ROUTE_HISTORY_LOGS,
         onClick: (e) => goTo(e, ROUTE_HISTORY_LOGS, history),
      },
      {
         label: "Charts",
         icon: <TrendingUpIcon />,
         href: ROUTE_HISTORY_LOGS,
         onClick: (e) => goTo(e, ROUTE_CHARTS, history),
      },
      {
         label: "Funds",
         icon: <MonetizationOnIcon />,
         href: ROUTE_HISTORY_LOGS,
         onClick: (e) => goTo(e, ROUTE_FUNDS, history),
      },
   ];

   return (
      <Drawer
         variant='permanent'
         classes={{
            root: classes.root,
            paper: clsx({
               [classes.drawerOpen]: open,
               [classes.drawerClose]: !open,
            }),
         }}
      >
         <List
            className={classes.navList}
            component='nav'
            aria-label='application stack'
         >
            {links.map((page) => (
               <Tooltip title={open ? "" : page.label} key={page.label}>
                  <ListItem
                     button
                     component='a'
                     href={page.href}
                     key={page.label}
                     className={clsx(classes.navListItem, {
                        [classes.navListItemActive]: page.active,
                     })}
                     onClick={page.onClick}
                  >
                     <ListItemAvatar className={classes.navListItemAvatar}>
                        {page.icon}
                     </ListItemAvatar>
                     <ListItemText
                        primary={page.label}
                        className={classes.navListItemText}
                     />
                  </ListItem>
               </Tooltip>
            ))}
         </List>
      </Drawer>
   );
};

export default LayoutSidebar;
