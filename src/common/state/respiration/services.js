import ApiRequest from "../../../utilities/request/ApiRequest";

const login = (body) => ApiRequest.postPure("/user/login", body);

const editUser = (body) => ApiRequest.postPure("/user/update_profile", body);

const editPassword = (body) => ApiRequest.postPure("/user/ch_pass", body);

export default {
   login,
   editUser,
   editPassword,
};
