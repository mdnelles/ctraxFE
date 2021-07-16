import services from "./services";

export const SET_DAILYHR_DATA = "SET_DAILYHR_DATA";
export const CLEAR_DAILYHR_DATA = "CLEAR_DAILYHR_DATA";
export const POPULATE_DAILYHR_DATA = "POPULATE_DAILYHR_DATA";

export const setDailyhrData = (data) => ({ type: SET_DAILYHR_DATA, data });
export const clearDailyhrData = () => ({ type: CLEAR_DAILYHR_DATA });
export const populateDailyhrData = () => ({ type: POPULATE_DAILYHR_DATA });
