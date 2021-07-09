import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../App.css";
import { useUserData } from "../../../common/state/user/hooks";
import { editUser } from "../../../common/state/user/actions";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 510,
      marginLeft: -35,
   },
   grid: {
      flexGrow: 1,
   },
   loaderSize: {
      display: "Block",
   },
   spacerForm: {
      display: "block",
      minWidth: 400,
      minHeight: 350,
   },
   spacerLoad: { padding: 5 },
   profileContainer: {
      maxWidth: 500,
      margin: 10,
      minHeight: 350,
      padding: 50,
      boxShadow: "0px 0px 0px #fff",
      opacity: 1,
      borderRadius: 10,
      // margin: "auto",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         width: 295,
         padding: "0 20px",
      },
   },
   BtnSave: {
      "width": 154,
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": "#324D66",
      "color": "#FFFFFF",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "marginTop": 10,
      "fontSize": 14,
      "float": "right",
      "&:hover": {
         background: "#99C2E5",
      },
   },
   BtnCancel: {
      "width": 97,
      "height": 36,
      "borderRadius": 4,
      "marginTop": 10,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": "#FFFFFF",
      "border": "1px solid #324D66",
      "color": "#324D66",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "fontSize": 14,
      "&:hover": {
         background: "#324D66",
         color: "#ffffff",
      },
      "float": "left",
   },

   welcomeClass: {
      display: "block",
      marginTop: 15,
   },
   topSpacer: {
      width: "100%",
      padding: 10,
   },
   profileInnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   inputContainer: {
      width: "100%",
      marginTop: 25,
      marginBottom: 25,
      InputLabelProps: {
         shrink: true,
      },
      [theme.breakpoints.down("sm")]: {
         maxWidth: 260,
      },
   },
   inputPass: {
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   spacer: {
      padding: 20,
   },
   row: {
      display: "flex",
   },
   col: {
      flex: 1,
   },
   feedback: {
      color: "#324D66",
      marginBottom: -20,
   },
   textbox: {
      height: 80,
   },
}));
const ProfileTab = (props) => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { email, firstName, lastName, id } = useUserData();
   const [feedback, setFeedback] = useState("");
   const [loading, setLoading] = useState("displayNone");
   const [seeForm, setSeeForm] = useState("displayBlock");

   let user = useSelector((state) => state.user);
   let token = user.token;

   const wait1 = (val) => {
      console.log("wait1");
      if (val) {
         setSeeForm("displayNone");
         setLoading("displayBlock");
      } else {
         setSeeForm("displayBlock");
         setLoading("displayNone");
      }
   };

   const handleSubmit = useCallback((e) => {
      e.preventDefault();
      let em = document.getElementById("email").value;
      let fn = document.getElementById("firstName").value;
      let ln = document.getElementById("lastName").value;
      if (!em || !fn || !ln) {
         setFeedback("All fields are required.  Could not submit");
         wait1(false);

         return;
      } else {
         setFeedback("Loading Changes");
         wait1(true);
         editUser(em, fn, ln, token)
            .then((res) => {
               setFeedback(!!res.msg ? res.msg : "Something went wrong");
               user.firstName = fn;
               user.lastName = ln;
               dispatch({ type: "USER_SET_DATA", payload: user });
               wait1(false);
            })
            .catch((err) => {
               console.log(err);
               wait1(false);
            });
      }
   });

   return (
      <div className={classes.root}>
         <div className={classes.profileInnerContainer}>
            <Paper className={classes.profileContainer} elevation={0}>
               <div className={classes.spacerForm}>
                  <div className={loading + " " + classes.spacerLoad}>
                     <CircularProgress />
                  </div>
                  <div className={seeForm}>
                     <div className='padding1'>
                        <label htmlFor='email' style={{ display: "none" }}>
                           First Name
                        </label>
                        <TextField
                           id='firstName'
                           className={classes.inputContainer}
                           required
                           InputLabelProps={{
                              shrink: true,
                           }}
                           placeholder='Input Text'
                           label='First Name'
                           variant='outlined'
                           defaultValue={firstName}
                        />

                        <label htmlFor='email' style={{ display: "none" }}>
                           Last Name
                        </label>
                        <TextField
                           id='lastName'
                           className={classes.inputContainer}
                           required
                           InputLabelProps={{
                              shrink: true,
                           }}
                           placeholder='Input Text'
                           label='Last Name'
                           variant='outlined'
                           defaultValue={lastName}
                        />

                        <label htmlFor='email' style={{ display: "none" }}>
                           Email
                        </label>
                        <TextField
                           id='email'
                           className={classes.inputContainer}
                           required
                           InputLabelProps={{
                              shrink: true,
                           }}
                           placeholder='Input Text'
                           label='Email (Readonly)'
                           variant='outlined'
                           defaultValue={email}
                           disabled={true}
                        />
                     </div>

                     <Button className={classes.BtnSave} onClick={handleSubmit}>
                        SAVE CHANGES
                     </Button>
                  </div>
               </div>
               <div className={classes.feedback}>{feedback}</div>
            </Paper>
         </div>
      </div>
   );
};

export default ProfileTab;
