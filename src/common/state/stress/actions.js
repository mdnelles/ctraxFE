import services from "./services";

export const SET_STRESS_DATA = "SET_STRESS_DATA";
export const CLEAR_STRESS_DATA = "CLEAR_STRESS_DATA";
export const POPULATE_STRESS_DATA = "POPULATE_STRESS_DATA";

export const setStressData = (data) => ({ type: SET_STRESS_DATA, data });
export const clearStressData = () => ({ type: CLEAR_STRESS_DATA });
export const populateStressData = () => ({ type: POPULATE_STRESS_DATA });
