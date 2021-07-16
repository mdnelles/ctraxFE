import services from "./services";

export const SET_SLEEP_DATA = "SET_SLEEP_DATA";
export const CLEAR_SLEEP_DATA = "CLEAR_SLEEP_DATA";
export const POPULATE_SLEEP_DATA = "POPULATE_SLEEP_DATA";

export const setSleepData = (data) => ({ type: SET_SLEEP_DATA, data });
export const clearSleepData = () => ({ type: CLEAR_SLEEP_DATA });
export const populateSleepData = () => ({ type: POPULATE_SLEEP_DATA });
