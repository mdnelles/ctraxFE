import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import ProfileTab from "./ProfileTab";
import PasswordTab from "./PasswordTab";
import { useQuery } from "../../../utilities/hooks"; //utilities/hooks
import { useHistory } from "react-router";

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box p={3}>
               <Typography component={"span"}>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
};

function a11yProps(index) {
   return {
      "id": `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}
const profiletheme = createMuiTheme((theme) => ({}));
const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "center",
      fontSize: 20,
      flexGrow: 1,
   },
   title: {
      margin: "0 0 20px",
   },
   tab: {
      textTransform: "none",
      fontSize: "18px",
      fontWeight: 500,
      fontFamily: "Roboto",
      letterSpacing: "1.6px",
      borderBottom: (props) =>
         props.tabSelected === 1 ? "2px solid #F5F5F5" : "2px solid #F5F5F5",
   },
   tabProfile: {
      maxWidth: 500,
      minHeight: 358,
   },
   tabPassword: {
      maxWidth: 1057,
      minHeight: 358,
      marginLeft: "-24px",
   },
   indicator: {
      backgroundColor: theme.palette.primary.main,
   },
   appBar: {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
      boxShadow: "none",
   },
}));

const TABS = {
   profile: 0,
   password: 1,
};

const TABS_VALUE = {
   0: "profile",
   1: "password",
};

const MyProfilePage = () => {
   const [value, setValue] = React.useState(0);
   const classes = useStyles({
      tabSelected: value,
   });
   const history = useHistory();
   const query = useQuery();
   useEffect(() => {
      setValue(TABS[query.get("tab")] || 0);
   }, []);

   const handleChange = (event, newValue) => {
      const params = new URLSearchParams();
      params.append("tab", TABS_VALUE[newValue]);
      history.push({ search: params.toString() });
      setValue(newValue);
   };

   return (
      <div className={classes.root}>
         <MuiThemeProvider theme={profiletheme}>
            <AppBar position='static' className={classes.appBar}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  classes={{
                     indicator: classes.indicator,
                  }}
               >
                  <Tab
                     label='Profile'
                     {...a11yProps(0)}
                     className={classes.tab}
                  />
                  <Tab
                     label='Password'
                     {...a11yProps(1)}
                     className={classes.tab}
                  />
               </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabProfile}>
               <ProfileTab />
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPassword}>
               <PasswordTab />
            </TabPanel>
         </MuiThemeProvider>
      </div>
   );
};

export default MyProfilePage;
