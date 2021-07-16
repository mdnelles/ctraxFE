import services from "./services";

export const SET_DAILIES_DATA = "SET_DAILIES_DATA";
export const CLEAR_DAILIES_DATA = "CLEAR_DAILIES_DATA";
export const POPULATE_DAILIES_DATA = "POPULATE_DAILIES_DATA";

export const setDailiesData = (data) => ({ type: SET_DAILIES_DATA, data });
export const clearDailiesData = () => ({ type: CLEAR_DAILIES_DATA });
export const populateDailiesData = () => ({ type: POPULATE_DAILIES_DATA });
