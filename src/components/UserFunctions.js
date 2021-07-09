import axios from "axios";
import localForage from "localforage";
import "../config"; // adding config for folder specific build
var serverPath = global.config.productionServer;
if (window.location.href.toString().includes("3000"))
   serverPath = global.config.devServer;

//userHasToken is quick local check of token in local forage
// does not validate token or check expired
export const userHasToken = async (token) => {
   try {
      localForage.getItem("token", function (err, val) {
         // we are going to assumed logged in however
         // sensative calls will be made with token
         if (val !== undefined && val !== null && val.length > 20) {
            console.log("user appears to have valid token ");
            return true;
         } else {
            console.log("400 User does not appear to have token ");
            return false;
         }
      });
   } catch (err) {
      console.log("Err (catch) UserFunctions > userIsLoggedIn ... " + err);
      document.location.href = "/";
      return false;
   }
};

export const signup = async (email, password) => {
   try {
      const res = await axios.post(serverPath + "/user/self_signup", {
         email,
         password,
      });
      console.log(res);
      return res;
   } catch (err) {
      console.log(err);
      return 0;
   }
};

export const forgot = async (email) => {
   try {
      const res = await axios.post(serverPath + "/mail/forgot_password", {
         email,
      });
      console.log(res);
      return res;
   } catch (err) {
      console.log(err);
      return 0;
   }
};

export const userHasValidToken = async (token) => {
   // only check with Firebase server if there appears to be a valid token
   try {
      const res = await axios.post(serverPath + "/user/hasValidToken", {
         token,
      });
      if (res.data.status !== undefined && res.data.status === 200) return true;
      else return false;
   } catch (err) {
      console.log("Err (catch.1) UserFunctions.userHasValuidToken: " + err);
      return false;
   }
};

export const loginUser = (email, password) => {
   return axios
      .post(serverPath + "/user/login", {
         email: email,
         password: password,
      })
      .then((res) => {
         console.log(res);
         return res;
      })
      .catch((err) => {
         console.log("Err: Login.js.login.catch: " + err);
         return 0;
      });
};

export const signUpUser = (email, password) => {
   console.log(serverPath);
   return axios
      .post(serverPath + "/user/register", {
         email,
         password,
         confirmPassword: password,
      })
      .then((res) => {
         return res;
      })
      .catch((err) => {
         console.log("err @signUpUser.catch");
         console.log(err);
         return err;
      });
};

export const logout = () => {
   localForage.clear().then(() => {
      console.log("localForage cleared");
      window.location.href = "/";
   });
};

export const getUsers = async (theToken, forceNetwork) => {
   return new Promise((resolve, reject) => {
      console.log("inside get users");
      localForage
         .getItem("users", function (err, data) {
            if (
               data === undefined ||
               data === null ||
               data.length < 1 ||
               forceNetwork === true
            ) {
               console.log("forced network");
               axios
                  .post(serverPath + "/user/get_users", {
                     token: theToken,
                  })
                  .then((data) => {
                     localForage.setItem("users", data.data).then(() => {
                        resolve(data.data);
                     });
                  });
            } else {
               // already have companies in localForage
               resolve(data);
            }
         })
         .catch((err) => {
            console.log(
               "could not get companies @ CompanyFunctions.getCompanies"
            );
            console.error(err);
            reject(err);
         });
   });
};
