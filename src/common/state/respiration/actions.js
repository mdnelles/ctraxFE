import services from "./services";

export const SET_RESPIRATION_DATA = "SET_RESPIRATION_DATA";
export const CLEAR_RESPIRATION_DATA = "CLEAR_RESPIRATION_DATA";
export const POPULATE_RESPIRATION_DATA = "POPULATE_RESPIRATION_DATA";

export const setRespirationData = (data) => ({
   type: SET_RESPIRATION_DATA,
   data,
});
export const clearRespirationData = () => ({ type: CLEAR_RESPIRATION_DATA });
export const populateRespirationData = () => ({
   type: POPULATE_RESPIRATION_DATA,
});
