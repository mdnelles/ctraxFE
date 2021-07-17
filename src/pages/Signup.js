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
import "../App.css";
import { useUserData } from "../common/state/user/hooks";
import { signup } from "../components/UserFunctions";
import { is_valid_email } from "../utilities/Functions";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
   },
   withoutLabel: {
      marginTop: theme.spacing(3),
   },
   main: {
      backgroundColor: "#333",
      width: window.innerWidth,
      height: window.innerHeight,
   },
   loginContainer: {
      width: 540,
      margin: 10,
      height: 500,
      opacity: 1,
      boxShadow: "0px 1px 10px #00000054",
      borderRadius: 10,
      // margin: "auto",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         minWidth: 310,
         padding: "0 20px",
      },
   },
   BtnLogin: {
      "width": 328,
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": "#324D66",
      "marginTop": 31,
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
   BtnSignUp: {
      "width": 328,
      "height": 36,
      "borderRadius": 4,
      "opacity": 1,
      "boxShadow": "0px 1px 3px #00000033",
      "background": theme.palette.primary.main,
      "marginTop": 30,
      "color": "#FFFFFF",
      "letterSpacing": 1.25,
      "fontFamily": "Roboto,Sans",
      "fontSize": 14,
      "&:hover": {
         background: theme.palette.primary.light,
      },
      [theme.breakpoints.down("sm")]: {
         width: 260,
      },
   },
   BtnForgot: {
      width: 328,
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
      maringBottom: 2,
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
   alink: {
      textDecoration: "none",
      color: theme.palette.primary.main,
   },
   topLogoSpacer: {
      display: "block",
      padding: 15,
   },
   already: {
      paddingTop: 30,
   },
}));

const Login = (props) => {
   const classes = useStyles();
   const { login } = useUserData();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [passwordShown, setPasswordShown] = useState(false);
   const [password2, setPassword2] = useState("");
   const [passwordShown2, setPasswordShown2] = useState(false);
   const [msgResponse, setMsgResponse] = useState("displayNone");
   const [msgForWelcome, setMsgForWelcome] = useState("displayBlock");
   const [loading, setLoading] = useState("displayNone");
   const [seeForm, setSeeForm] = useState("displayBlock");
   const [response, setResponse] = useState(
      "The username or password you have entered is invalid."
   );

   const handleClickShowPassword = () => {
      setPasswordShown(!passwordShown);
   };

   const handleMouseDownPassword = (e) => {
      e.preventDefault();
   };

   const handleClickShowPassword2 = () => {
      setPasswordShown2(!passwordShown2);
   };

   const handleMouseDownPassword2 = (e) => {
      e.preventDefault();
   };

   const handleSignUp = useCallback(
      (e) => {
         e.preventDefault();

         setMsgResponse("displayBlock");
         setMsgForWelcome("displayNone");
         if (!email || !password) {
            setSeeForm("displayBlock");
            setLoading("displayNone");
            setResponse("Sign up requires valid email & password.");
         } else if (password2 !== password) {
            setSeeForm("displayBlock");
            setLoading("displayNone");
            setResponse("Passwords do not match");
         } else if (!is_valid_email(email)) {
            setSeeForm("displayBlock");
            setLoading("displayNone");
            setResponse("Not a valid email.");
         } else {
            setSeeForm("displayNone");
            setLoading("displayBlock");
            (async () => {
               const res = await signup(email, password);

               if (!!res.data && !!res.data.msg) setResponse(res.data.msg);
               else setResponse("Please enter valid email");

               setTimeout(() => {
                  if (
                     !!res.data &&
                     !!res.data.msg.toString().includes("Success")
                  ) {
                     //setToggleAlready('displayBlock');
                  } else {
                     setSeeForm("displayBlock");
                  }
                  setLoading("displayNone");
               }, 500);
            })();
         }
      },
      [email, password, password2, login]
   );

   return (
      <div className={classes.main}>
         <div className='vertical-center center-outer'>
            <div className={classes.loginInnerContainer}>
               <Paper className={classes.loginContainer} elevation={8}>
                  <div className='padding1'>
                     {/* -----------Header----------------*/}
                     <div className={classes.topLogoSpacer} />
                     <div
                        className={msgResponse}
                        style={{
                           color: "#900",
                        }}
                     >
                        {response}
                     </div>
                     <div className={`${classes.progress}  ${loading}`}>
                        <div className='center-inner'>
                           <CircularProgress />
                           <br />
                           Connecting to cloud.
                        </div>
                     </div>
                     <div className={seeForm}>
                        <form onSubmit={handleSignUp}>
                           <label htmlFor='email' style={{ display: "none" }}>
                              Email
                           </label>
                           <TextField
                              id='email'
                              className={classes.inputContainer}
                              required
                              size='small'
                              placeholder='Input text'
                              label='Email'
                              InputLabelProps={{
                                 shrink: true,
                              }}
                              variant='outlined'
                              defaultValue={email}
                              onChange={(event) =>
                                 setEmail(event.target.value.toString().trim())
                              }
                           />

                           <FormControl
                              className={clsx(
                                 classes.margin,
                                 classes.textField
                              )}
                              variant='outlined'
                              style={{ marginTop: 42 }}
                           >
                              <label
                                 htmlFor='outlined-adornment-password'
                                 style={{ display: "none" }}
                              >
                                 Email
                              </label>

                              {/** password 1 */}
                              <InputLabel htmlFor='outlined-adornment-password'>
                                 Password
                              </InputLabel>
                              <OutlinedInput
                                 id='outlined-adornment-password'
                                 type={passwordShown ? "text" : "password"}
                                 className={classes.inputPass}
                                 required
                                 size='small'
                                 label='Password'
                                 placeholder='Input text'
                                 variant='outlined'
                                 defaultValue={password}
                                 onChange={(event) =>
                                    setPassword(event.target.value)
                                 }
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
                           <FormControl
                              className={clsx(
                                 classes.margin,
                                 classes.textField
                              )}
                              variant='outlined'
                              style={{ marginTop: 40 }}
                           >
                              {/** password 2 */}
                              <InputLabel htmlFor='outlined-adornment-password2'>
                                 Confirm Password
                              </InputLabel>
                              <OutlinedInput
                                 id='password2'
                                 type={passwordShown2 ? "text" : "password"}
                                 className={classes.inputPass}
                                 required
                                 size='small'
                                 label='ConfirmPassword'
                                 //  type="password"
                                 variant='outlined'
                                 defaultValue={password2}
                                 onChange={(event) =>
                                    setPassword2(event.target.value)
                                 }
                                 endAdornment={
                                    <InputAdornment position='end'>
                                       <IconButton
                                          aria-label='toggle password visibility'
                                          onClick={handleClickShowPassword2}
                                          onMouseDown={handleMouseDownPassword2}
                                          edge='end'
                                          style={{ color: "#BDC3C7" }}
                                       >
                                          {passwordShown2 ? (
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
                              className={classes.BtnSignUp}
                              size='small'
                              variant='contained'
                              onClick={handleSignUp}
                           >
                              SIGN UP
                           </Button>
                        </form>
                     </div>
                  </div>
                  <div className={classes.already}>
                     Already have an account?{" "}
                     <a href='/login' className={classes.alink}>
                        Log In
                     </a>
                  </div>

                  <div style={{ width: "100%", padding: 9 }} />
                  <div
                     style={{
                        textAlign: "left",
                        color: "#dddddd",
                        padding: 10,
                     }}
                  >
                     {props.ver}
                  </div>
               </Paper>
            </div>
         </div>
      </div>
   );
};

export default Login;
