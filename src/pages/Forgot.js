import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";
import { forgot } from "../components/UserFunctions";
import { is_valid_email } from "../utilities/Functions";

import "../App.css";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
   },
   withoutLabel: {
      marginTop: theme.spacing(3),
   },
   loginContainer: {
      width: 525,
      margin: 10,
      height: 420,
      opacity: 1,
      boxShadow: "0px 1px 10px #00000054",
      borderRadius: 10,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         width: 295,
         padding: "0 20px",
      },
   },
   BtnLogin: {
      "width": "%100",
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": theme.palette.primary.main,
      "marginTop": 31,
      "color": "#FFFFFF",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "fontSize": 14,
      "&:hover": {
         background: "#324D66",
      },
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   topLogoSpacer: {
      disaplay: "block",
      padding: 20,
   },
   BtnSignUp: {
      "width": "%100",
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": theme.palette.primary.main,
      "marginTop": 21,
      "color": "#FFFFFF",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "fontSize": 14,
      "&:hover": {
         background: "#324D66",
      },
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   BtnForgot: {
      width: "%100",
      height: 36,
      borderRadius: 4,
      opacity: 1,
      marginTop: 21,
      color: theme.palette.primary.dark,
      fontFamily: "Roboto,Sans",
      fontSize: 14,
      fontWeight: 400,
   },
   forgotTxt: {
      fontSize: 18,
      fontWeight: 400,
      display: "Block",
      paddingBottom: 13,
   },
   progress: {
      padding: 80,
   },
   welcomeClass: {
      display: "block",
      marginTop: 15,
   },
   topSpacer: { width: "100%", padding: 8 },
   loginInnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   inputContainer: {
      width: 330,
      marginTop: 31,
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   inputPass: {
      width: 330,
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
}));

const Forgot = () => {
   const classes = useStyles();
   const [email, setEmail] = useState("");
   const [msgForError, setMsgForError] = useState("displayNone");
   const [msgForWelcome, setMsgForWelcome] = useState("displayBlock");
   const [response, setResponse] = useState("Please enter a valid email");
   const [seeForm, setSeeForm] = useState("displayBlock");

   const handleForgot = useCallback(
      (e) => {
         e.preventDefault();
         console.log("--" + email + "--");
         if (is_valid_email(email)) {
            setSeeForm("displayNone");

            (async () => {
               const res = await forgot(email);

               if (!!res.data && !!res.data.msg) setResponse(res.data.msg);
               else setResponse("Please enter valid email");
               setTimeout(() => {
                  setSeeForm("displayBlock");
                  setMsgForError("displayBlock");
                  setMsgForWelcome("displayNone");
               }, 500);
            })();
         } else {
            setResponse("Please enter a valid email address.");
            setSeeForm("displayBlock");
            setMsgForError("displayBlock");
            setMsgForWelcome("displayNone");
         }
      },
      [email]
   );

   return (
      <div className='vertical-center center-outer'>
         <div className={classes.loginInnerContainer}>
            <Paper className={classes.loginContainer} elevation={8}>
               <div>
                  <div className={classes.topLogoSpacer} />
                  {/* -----------Header----------------*/}
                  <div>
                     <div className='displayBlock headerNameLogin'></div>

                     <div>
                        <div className={classes.topSpacer} />
                        <div className={msgForWelcome}>
                           <span className={classes.forgotTxt}>
                              Forgot Your password?
                           </span>
                           Please enter your email and we will send you
                           <br />
                           instructions to reset your password
                        </div>
                        <div
                           className={msgForError}
                           style={{
                              color: "#900",
                           }}
                        >
                           {response}
                        </div>
                     </div>
                  </div>

                  <div className={seeForm}>
                     <form onSubmit={handleForgot}>
                        <TextField
                           id='email'
                           className={classes.inputContainer}
                           required
                           size='small'
                           label='Email'
                           InputLabelProps={{
                              shrink: true,
                           }}
                           variant='outlined'
                           defaultValue={" "}
                           onChange={(event) =>
                              setEmail(event.target.value.toString().trim())
                           }
                        />
                        <br />

                        <Button
                           className={classes.BtnLogin}
                           size='small'
                           variant='contained'
                           onClick={handleForgot}
                        >
                           RESET PASSWORD
                        </Button>
                        <br />

                        <Button
                           className={classes.BtnForgot}
                           size='small'
                           component={Link}
                           to='/login'
                        >
                           Back to Log In
                        </Button>
                     </form>
                  </div>
                  <div style={{ width: "100%", padding: 9 }} />
               </div>
            </Paper>
         </div>
      </div>
   );
};

export default Forgot;
