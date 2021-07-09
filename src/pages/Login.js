import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useUserData } from "../common/state/user/hooks";
import { theme } from "../constants/theme";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
   },
   withoutLabel: {
      marginTop: theme.spacing(3),
   },
   loginContainer: {
      paddingTop: 100,
      width: 525,
      margin: 12,
      height: 580,
      opacity: 1,
      boxShadow: "0px 1px 10px #00000054",
      borderRadius: 10,
      // margin: "auto",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         width: 295,
         paddingTop: 40,
         height: 480,
      },
   },
   BtnLogin: {
      "width": 328,
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
         background: theme.palette.primary.dark,
      },
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   BtnSignUp: {
      "width": 328,
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": theme.palette.primary.light,
      "marginTop": 21,
      "color": "#FFFFFF",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "fontSize": 14,
      "&:hover": {
         background: theme.palette.primary.main,
      },
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   BtnForgot: {
      width: "100%",
      maxWidth: 328,
      height: 36,
      borderRadius: 4,
      opacity: 1,
      marginTop: 21,
      color: theme.palette.primary.dark,
      fontFamily: "Roboto,Sans",
      fontSize: 14,
      fontWeight: 400,
   },
   progress: {
      padding: 80,
   },
   welcomeClass: {
      display: "block",
      marginTop: 15,
   },
   topSpacer: {
      width: "100%",
      padding: 8,
   },
   loginInnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   inputContainer: {
      width: "100%",
      maxWidth: 330,
      marginTop: 31,
      [theme.breakpoints.down("sm")]: {
         maxWidth: 260,
      },
   },
   inputPass: {
      width: 330,
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
}));

const Login = (props) => {
   const classes = useStyles();
   const { login } = useUserData();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordShown, setPasswordShown] = useState(false);
   const [msgFromServerClass, setMsgFromServerClass] = useState("displayNone");
   const [msgFromServer, setMsgFromServer] = useState("");
   const [msgForWelcome, setMsgForWelcome] = useState("displayBlock");
   const [loading, setLoading] = useState("displayNone");
   const [seeForm, setSeeForm] = useState("displayBlock");

   const handleClickShowPassword = () => {
      setPasswordShown(passwordShown ? false : true);
   };

   const handleMouseDownPassword = (e) => {
      e.preventDefault();
   };

   const handleLogIn = useCallback(
      (e) => {
         e.preventDefault();
         if (!email || !password) {
            setSeeForm("displayBlock");
            setLoading("displayNone");

            return;
         } else {
            setSeeForm("displayNone");
            setLoading("displayBlock");
            (async () => {
               let res = await login(email, password);
               if (!!res && !!res.err) {
                  setMsgFromServerClass(res.msg);
                  setMsgFromServer(res.msg);
                  setSeeForm("displayBlock");
                  setLoading("displayNone");
                  setMsgFromServerClass("displayBlock");
                  setMsgForWelcome("displayNone");
               } else {
                  setSeeForm("displayBlock");
                  setLoading("displayNone");
                  setMsgFromServer("something went wrong check console.log");
                  console.log(res);
               }
            })();
         }
      },
      [email, password, login]
   );

   return (
      <div className='vertical-center center-outer'>
         <div className={classes.loginInnerContainer}>
            <Paper className={classes.loginContainer} elevation={8}>
               {/* -----------Header----------------*/}
               <div>
                  <div className='displayBlock headerNameLogin'>Login</div>
                  <div className='displayBlock'>{/*img */}</div>
                  <div>
                     <div className={classes.topSpacer} />
                     <div className={msgForWelcome}>
                        Welcome back!
                        <br />
                     </div>
                     <div
                        className={msgFromServerClass}
                        style={{
                           color: "#900",
                        }}
                     >
                        {msgFromServer}
                     </div>
                  </div>
               </div>
               <div className={classes.progress + "  " + loading}>
                  <div className='center-inner'>
                     <CircularProgress />
                     <br />
                     Checking credentials
                  </div>
               </div>
               <div className={seeForm}>
                  <form onSubmit={handleLogIn}>
                     <label htmlFor='email' style={{ display: "none" }}>
                        Email
                     </label>
                     <TextField
                        id='email'
                        className={classes.inputContainer}
                        required
                        size='small'
                        InputLabelProps={{
                           shrink: true,
                        }}
                        label='Email'
                        variant='outlined'
                        defaultValue={email}
                        onChange={(event) =>
                           setEmail(event.target.value.toString().trim())
                        }
                     />

                     <FormControl
                        className={clsx(classes.margin, classes.textField)}
                        variant='outlined'
                        style={{ marginTop: 31 }}
                        InputLabelProps={{
                           shrink: true,
                        }}
                     >
                        <label
                           htmlFor='outlined-adornment-password'
                           style={{ display: "none" }}
                           InputLabelProps={{
                              shrink: true,
                           }}
                        >
                           Email
                        </label>
                        <InputLabel htmlFor='outlined-adornment-password'>
                           Password
                        </InputLabel>
                        <OutlinedInput
                           InputLabelProps={{
                              shrink: true,
                           }}
                           id='outlined-adornment-password'
                           type={passwordShown ? "text" : "password"}
                           className={classes.inputPass}
                           required
                           size='small'
                           label='Password'
                           //  type="password"
                           variant='outlined'
                           defaultValue={password}
                           onChange={(event) => setPassword(event.target.value)}
                           endAdornment={
                              <InputAdornment position='end'>
                                 <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                    style={{ color: "#BDC3C7" }}
                                 >
                                    {passwordShown ? (
                                       <Visibility />
                                    ) : (
                                       <VisibilityOff />
                                    )}
                                 </IconButton>
                              </InputAdornment>
                           }
                           labelWidth={70}
                        />
                     </FormControl>
                     <Button
                        id='submit'
                        type='submit'
                        className={classes.BtnLogin}
                        size='small'
                        variant='contained'
                     >
                        LOG IN
                     </Button>

                     <Button
                        className={classes.BtnSignUp}
                        size='small'
                        variant='contained'
                        component={Link}
                        to='/signup'
                     >
                        SIGN UP
                     </Button>
                     <Button
                        className={classes.BtnForgot}
                        size='small'
                        component={Link}
                        to='/forgot'
                     >
                        Forgot Password?
                     </Button>
                  </form>
               </div>
               <div style={{ width: "100%", padding: 9 }} />
               <div
                  style={{ textAlign: "left", color: "#dddddd", padding: 10 }}
               >
                  {props.ver}
               </div>
            </Paper>
         </div>
      </div>
   );
};

export default Login;
