import axios from "axios";
import { DEV_SERVER, PROD_SERVER } from "../../constants/api";

var API_URL = PROD_SERVER;
if (window.location.href.toString().includes("3000")) API_URL = DEV_SERVER;

const axiosInstance = axios.create({
   baseURL: API_URL,
   timeout: 300000,
});

const processResponse = (res) => res.data;
const processFinally = () => {};
const processError = (err) => {
   if (axios.isCancel(err)) {
      throw new axios.Cancel(err);
   }

   return Promise.reject(err);
};

const action = (request) =>
   request.then(processResponse).catch(processError).finally(processFinally);

const getBaseHeaders = (headers = {}, axiosHeaders = {}) => ({
   headers,
   ...axiosHeaders,
});

const getAction = (path, headers, outsideHeaders = false) => {
   return action(
      axiosInstance.get(path, getBaseHeaders(headers, outsideHeaders))
   );
};

const purePostAction = (path, data, headers, outsideHeaders = false) => {
   return action(
      axiosInstance.post(
         path,
         data ?? null,
         getBaseHeaders(headers, outsideHeaders)
      )
   );
};

const postAction = (path, data, headers, outsideHeaders = false) => {
   const body = { ...data };
   const state =
      localStorage.getItem("state") &&
      JSON.parse(localStorage.getItem("state"));
   if (state && state.user) {
      body.token = state.user.token;
      body.email = state.user.email;
   }

   return action(
      purePostAction(path, body, getBaseHeaders(headers, outsideHeaders))
   );
};

const putAction = (path, data, headers, outsideHeaders = false) => {
   return action(
      axiosInstance.put(
         path,
         data ?? null,
         getBaseHeaders(headers, outsideHeaders)
      )
   );
};

const patchAction = (path, data, headers, outsideHeaders = false) => {
   return action(
      axiosInstance.patch(
         path,
         data ?? null,
         getBaseHeaders(headers, outsideHeaders)
      )
   );
};

const deleteAction = (path, headers, outsideHeaders = false) => {
   return action(
      axiosInstance.delete(path, getBaseHeaders(headers, outsideHeaders))
   );
};

export default {
   get: getAction,
   post: postAction,
   postPure: purePostAction,
   put: putAction,
   patch: patchAction,
   delete: deleteAction,
};
