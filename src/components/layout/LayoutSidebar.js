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
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CloudCircleIcon from "@material-ui/icons/CloudCircle";
import OpacityIcon from "@material-ui/icons/Opacity";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import {
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
         padding: "10px 12px",
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
      padding: "3px 20px 10px 18px",
      color: theme.palette.primary.main,
      marginBottom: 5,
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
         label: "Dailes",
         icon: <TodayIcon />,
         href: ROUTE_DAILIES,
         onClick: (e) => goTo(e, ROUTE_DAILIES, history),
      },
      {
         label: "Daily HR ",
         icon: <LocalHospitalIcon />,
         href: ROUTE_DAILYHR,
         onClick: (e) => goTo(e, ROUTE_DAILYHR, history),
      },
      {
         label: "Epoch",
         icon: <HourglassEmptyIcon />,
         href: ROUTE_EPOCH,
         onClick: (e) => goTo(e, ROUTE_EPOCH, history),
      },
      {
         label: "Pulse Oxygen",
         icon: <OpacityIcon />,
         href: ROUTE_PULSE,
         onClick: (e) => goTo(e, ROUTE_PULSE, history),
      },
      {
         label: "Respiration",
         icon: <CloudCircleIcon />,
         href: ROUTE_RESPIRATION,
         onClick: (e) => goTo(e, ROUTE_RESPIRATION, history),
      },
      {
         label: "Sleep",
         icon: <LocalHotelIcon />,
         href: ROUTE_SLEEP,
         onClick: (e) => goTo(e, ROUTE_SLEEP, history),
      },
      {
         label: "Stress",
         icon: <SentimentDissatisfiedIcon />,
         href: ROUTE_STRESS,
         onClick: (e) => goTo(e, ROUTE_STRESS, history),
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
