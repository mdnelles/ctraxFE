import services from "./services";

export const USER_SET_DATA = "USER_SET_DATA";
export const USER_CLEAR_DATA = "USER_CLEAR_DATA";

const userSetData = (data) => ({ type: USER_SET_DATA, data });
export const userClearData = () => ({ type: USER_CLEAR_DATA });

export const loginUser = (email, password) => async (dispatch) => {
   try {
      //const response = await services.login({ email, password });
      // bypass login for the time being
      const response = {
         email: "test@curetrax.com",
         firstName: "Podolski",
         lastName: "Klose",
         id: 109,
         token: "9uhrv9ueh3c9u2hdc92hci9uw4hci9ureujfhvcifcnojkdwjncxiowejcxioewjxijowechhriygvreu8g",
      };
      if (!!response.err) {
         return response;
      } else {
         const { id, firstName, lastName } = response.nameInfo;
         let newUserData = {
            email,
            firstName,
            lastName,
            id,
            token: response.token,
         };

         dispatch(userSetData(newUserData));
         window.location.href = "/dashboard";
      }
   } catch (error) {
      console.log("---catch errror--");
      console.log(error);
   }
};

export const editUser = (email, firstName, lastName, token) => {
   return new Promise((resolve, reject) => {
      try {
         (async () => {
            const response = await services.editUser({
               email: email,
               first_name: firstName,
               last_name: lastName,
               token: token,
            });

            resolve(response);
         })();
      } catch (error) {
         console.log(error);
         reject(error);
      }
   });
};

export const editPassword = (currentPassword, newPassword, email, token) => {
   return new Promise((resolve, reject) => {
      try {
         (async () => {
            const response = await services.editPassword({
               currentPassword,
               newPassword,
               email,
               token,
            });

            resolve(response);
         })();
      } catch (error) {
         console.log(error);
         reject(error);
      }
   });
};
