import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useCallback, useState, useMemo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import "../../../App.css";
import { editPassword } from "../../../common/state/user/actions";
import { Box } from "@material-ui/core";
import PasswordRequirement from "./components/PasswordRequirement";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "12px",
   },
   grid: {
      flexGrow: 1,
   },
   gridBig: {
      flexGrow: 1,
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
   profileContainer: {
      padding: "36px 26px 36px 26px",
      [theme.breakpoints.up("sm")]: {
         padding: "46px 56px 46px 56px",
      },
      [theme.breakpoints.up("md")]: {
         padding: "56px 86px 46px 86px",
      },
      borderRadius: 10,
      textAlign: "center",
   },
   inputContainer: {
      "width": "100%",
      "marginTop": 40,
      "&:nth-child(2)": {
         marginTop: 0,
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
   feedback: {
      color: "#324D66",
      marginTop: 20,
   },
   spacerForm: {
      display: "block",
      minWidth: 400,
      minHeight: 350,
   },
   spacerLoad: { marginTop: 200 },
   profileGridContainer: {
      flexDirection: "column",
      [theme.breakpoints.up("lg")]: {
         flexDirection: "row",
      },
   },
   textFieldLabel: {
      "color": "#747C83",
      "&.focused": {
         color: "#747C83",
      },
   },
}));

const UPPERCASE_REGEX = /^(?=.*[A-Z]).*$/;
const LOWERCASE_REGEX = /^(?=.*[a-z]).*$/;
const SPECIAL_REGEX = /[*@!#$*%&()^~{}]+/;
const LENGTH_REGEX = /^(.{8,})$/;
const NUMERIC_REGEX = /^(?=.*?\d).*$/;

const validatingPasswordRequirements = ({
   newPassword,
   confirmPassword,
   onlyConfirm,
} = {}) => {
   const requirements = {};
   if (newPassword === "") {
      return {
         lengthCorrect: false,
         upperCaseCharacter: false,
         lowerCaseCharacter: false,
         numericCharacter: false,
         specialCharacter: false,
      };
   }
   if (onlyConfirm) {
      return requirements;
   }
   requirements.lengthCorrect = !LENGTH_REGEX.test(newPassword);
   requirements.upperCaseCharacter = !UPPERCASE_REGEX.test(newPassword);
   requirements.lowerCaseCharacter = !LOWERCASE_REGEX.test(newPassword);
   requirements.numericCharacter = !NUMERIC_REGEX.test(newPassword);
   requirements.specialCharacter = !SPECIAL_REGEX.test(newPassword);
   return requirements;
};

const PasswordTab = () => {
   const classes = useStyles();
   const [passwordRequirements, setPasswordRequirements] = useState({
      lengthCorrect: false,
      upperCaseCharacter: false,
      lowerCaseCharacter: false,
      numericCharacter: false,
      specialCharacter: false,
   });
   const [showPasswordRequirements, setShowPasswordRequirements] = useState(
      false
   );
   const [currentPassword, setCurrentPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [feedback, setFeedback] = useState("");
   const [loading, setLoading] = useState(false);
   const isValidPasswordRequirements = Object.values(passwordRequirements).some(
      (requirement) => requirement === true
   );

   let user = useSelector((state) => state.user);
   let token = user.token;

   const wait1 = (val) => {
      if (val) {
         setLoading(true);
      } else {
         setLoading(false);
      }
   };

   const handleCancel = (e) => {
      e.preventDefault();
   };

   const handleChangeCurrentPassword = useCallback(
      (event) => {
         setCurrentPassword(event.target.value.toString().trim());
         setShowPasswordRequirements(false);
      },
      [setPasswordRequirements, setCurrentPassword]
   );

   const handleChangeNewPassword = useCallback(
      (event) => {
         setNewPassword(event.target.value.toString().trim());
      },
      [setNewPassword, setShowPasswordRequirements]
   );

   const handleConfirmPassword = useCallback(
      (event) => {
         setConfirmPassword(event.target.value.toString().trim());
      },
      [confirmPassword]
   );

   const handleKeyUpNewPassword = useCallback(
      (event) => {
         const value = event.target.value.toString();
         setPasswordRequirements((prev) => ({
            ...prev,
            ...validatingPasswordRequirements({
               newPassword: value,
               confirmPassword: confirmPassword,
            }),
         }));
         setShowPasswordRequirements(true);
         setFeedback("");
         if (value === "") setShowPasswordRequirements(false);
      },
      [confirmPassword, setPasswordRequirements, setShowPasswordRequirements]
   );

   const handleKeyUpConfirmPassword = useCallback(
      (event) => {
         setPasswordRequirements((prev) => ({
            ...prev,
            ...validatingPasswordRequirements({
               newPassword,
               confirmPassword: event.target.value.toString(),
               onlyConfirm: true,
            }),
         }));

         setFeedback("");
      },
      [newPassword, setPasswordRequirements]
   );

   const handleSubmit = useCallback(
      (e) => {
         e.preventDefault();
         let cp = document.getElementById("currentPassword").value;
         let np = document.getElementById("newPassword").value;
         if (!cp || !np) {
            setFeedback("All fields are required.  Could not submit");
            wait1(false);

            return;
         } else {
            setFeedback("Loading Changes");
            wait1(true);
            editPassword(cp, np, user.email, token)
               .then((res) => {
                  setFeedback(!!res.msg ? res.msg : "Something went wrong");
                  wait1(false);
               })
               .catch((err) => {
                  console.log(err);
                  wait1(false);
               });
         }
      },
      [setShowPasswordRequirements]
   );

   return (
      <div className={classes.root}>
         <div className={classes.profileInnerContainer}>
            <Paper className={classes.profileContainer} elevation={0}>
               <Box
                  width={{
                     md: "328px",
                  }}
                  maxWidth={{
                     sm: "328px",
                  }}
               >
                  <Box>
                     <div>
                        <label
                           htmlFor='currentPassword'
                           style={{ display: "none" }}
                        >
                           Current Password
                        </label>
                        <TextField
                           id='currentPassword'
                           className={classes.inputContainer}
                           required
                           placeholder='Input Text'
                           label='Current Password'
                           variant='outlined'
                           onChange={handleChangeCurrentPassword}
                           type={"password"}
                        />

                        <label htmlFor='email' style={{ display: "none" }}>
                           New Password
                        </label>
                        <TextField
                           id='newPassword'
                           className={classes.inputContainer}
                           required
                           placeholder='Input Text'
                           type={"password"}
                           label='New Password'
                           defaultValue={newPassword}
                           variant='outlined'
                           onChange={handleChangeNewPassword}
                           onKeyUp={handleKeyUpNewPassword}
                        />

                        <label htmlFor='email' style={{ display: "none" }}>
                           Confirm Password
                        </label>
                        <TextField
                           id='confirmPassword'
                           className={classes.inputContainer}
                           required
                           placeholder='Input Text'
                           label='Confirm Password'
                           defaultValue={confirmPassword}
                           type={"password"}
                           variant='outlined'
                           onChange={handleConfirmPassword}
                           onKeyUp={handleKeyUpConfirmPassword}
                        />
                     </div>
                  </Box>
                  {showPasswordRequirements && (
                     <Box
                        flexDirection={{
                           xs: "column",
                           md: "row",
                        }}
                        mt={"10px"}
                        display='flex'
                     >
                        <Box
                           flex={{
                              xs: "100%",
                              md: "50%",
                           }}
                        >
                           <Box mb={"10px"}>
                              <PasswordRequirement
                                 text='8 Character minimum'
                                 isValid={!passwordRequirements.lengthCorrect}
                              />
                           </Box>
                           <Box mb={"10px"}>
                              <PasswordRequirement
                                 text='One lowercase character'
                                 isValid={
                                    !passwordRequirements.lowerCaseCharacter
                                 }
                              />
                           </Box>
                           <Box mb={"10px"}>
                              <PasswordRequirement
                                 text='One Uppercase character'
                                 isValid={
                                    !passwordRequirements.upperCaseCharacter
                                 }
                              />
                           </Box>
                        </Box>
                        <Box
                           flex={{
                              xs: "100%",
                              md: "50%",
                           }}
                        >
                           <Box mb={"10px"}>
                              <PasswordRequirement
                                 text='One number'
                                 isValid={
                                    !passwordRequirements.numericCharacter
                                 }
                              />
                           </Box>
                           <Box mb={"10px"}>
                              <PasswordRequirement
                                 text='One special character'
                                 isValid={
                                    !passwordRequirements.specialCharacter
                                 }
                              />
                           </Box>
                        </Box>
                     </Box>
                  )}

                  <Box mt={"50px"}>
                     <Button
                        className={classes.BtnSave}
                        onClick={handleSubmit}
                        disabled={loading || isValidPasswordRequirements}
                     >
                        {loading ? (
                           <CircularProgress color='primary' size={20} />
                        ) : (
                           "SAVE CHANGES"
                        )}
                     </Button>
                  </Box>
               </Box>
               <div className={classes.feedback}>{feedback}</div>
            </Paper>
         </div>
      </div>
   );
};

export default PasswordTab;
