import services from "./services";

export const SET_EPOCH_DATA = "SET_EPOCH_DATA";
export const CLEAR_EPOCH_DATA = "CLEAR_EPOCH_DATA";
export const POPULATE_EPOCH_DATA = "POPULATE_EPOCH_DATA";

export const setEpochData = (data) => ({ type: SET_EPOCH_DATA, data });
export const clearEpochData = () => ({ type: CLEAR_EPOCH_DATA });
export const populateEpochData = () => ({ type: POPULATE_EPOCH_DATA });
