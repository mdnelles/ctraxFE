import { AppBar, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/CloseRounded";
import MenuIcon from "@material-ui/icons/MenuRounded";
import clsx from "clsx";
import React from "react";
import { APPBAR_HEIGHT } from "../../constants/layout";
import LayoutHeaderUserWidget from "./LayoutHeaderUserWidget";
import { useWindowSize } from "../../utilities/hooks";

const useStyles = makeStyles((theme) => ({
   appBar: {
      height: APPBAR_HEIGHT,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarToolbar: {
      minHeight: 56,
      paddingLeft: 22,
   },
   appBarControls: {
      display: "flex",
      alignItems: "center",
   },
   appBarTitle: {
      fontSize: 20,
      marginLeft: 11,
      fontWeight: 500,
      margin: 0,
   },
   icon: {
      "color": "#fff",
      "transition": theme.transitions.create("color"),
      "&:hover": {
         color: theme.palette.primary.light,
      },
   },
   appBarIcons: {
      display: "flex",
      justifyContent: "flex-end",
   },
   menuButton: {
      "marginLeft": -12,
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   hidden: {
      display: "none",
   },
   whiteIcon: {
      width: 24,
      height: 24,
      display: "flex",
      marginRight: 12,
   },
}));

const LayoutHeader = (props) => {
   const { open } = props;
   const classes = useStyles();
   const windowSize = useWindowSize();

   return (
      <AppBar position='fixed' className={classes.appBar}>
         <Toolbar className={classes.appBarToolbar}>
            <Grid item className={classes.appBarControls} xs={4}>
               <div className={classes.appBarButton}>
                  <IconButton
                     color='inherit'
                     aria-label='open drawer'
                     onClick={props.handleDrawerOpen}
                     edge='start'
                     className={clsx(classes.menuButton, {
                        [classes.hidden]: open,
                     })}
                  >
                     <MenuIcon className={classes.icon} />
                  </IconButton>
                  <IconButton
                     color='inherit'
                     aria-label='close drawer'
                     onClick={props.handleDrawerClose}
                     edge='start'
                     className={clsx(classes.menuButton, {
                        [classes.hidden]: !open,
                     })}
                  >
                     <CloseIcon className={classes.icon} />
                  </IconButton>
               </div>
               <h1 className={classes.appBarTitle}>Cure Trax</h1>
            </Grid>

            <Grid item className={classes.appBarIcons} xs={8}>
               <LayoutHeaderUserWidget
                  iconClassName={classes.icon}
                  iconButtonClassName={classes.menuButton}
               />
            </Grid>
         </Toolbar>
      </AppBar>
   );
};

export default LayoutHeader;
