import services from "./services";

export const DAILIES_SET_DATA = "DAILIES_SET_DATA";
export const DAILIES_CLEAR_DATA = "DAILIES_CLEAR_DATA";

const dailiesSetData = (data) => ({ type: DAILIES_SET_DATA, data });
export const dailiesClearData = () => ({ type: DAILIES_CLEAR_DATA });

export const loginDailies = (email, password) => async (dispatch) => {
   try {
      const response = await services.login({ email, password });

      if (!!response.err) {
         return response;
      } else {
         const { id, firstName, lastName } = response.nameInfo;
         let newDailiesData = {
            email,
            firstName,
            lastName,
            id,
            token: response.token,
         };

         dispatch(dailiesSetData(newDailiesData));
         window.location.href = "/dashboard";
      }
   } catch (error) {
      console.log("---catch errror--");
      console.log(error);
   }
};

export const editDailies = (email, firstName, lastName, token) => {
   return new Promise((resolve, reject) => {
      try {
         (async () => {
            const response = await services.editDailies({
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
