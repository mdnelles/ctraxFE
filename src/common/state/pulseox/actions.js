import services from "./services";

export const SET_PULSEOX_DATA = "SET_PULSEOX_DATA";
export const CLEAR_PULSEOX_DATA = "CLEAR_PULSEOX_DATA";
export const POPULATE_PULSEOX_DATA = "POPULATE_PULSEOX_DATA";

export const setPulseOXData = (data) => ({ type: SET_PULSEOX_DATA, data });
export const clearPulseOXData = () => ({ type: CLEAR_PULSEOX_DATA });
export const populatePulseOXData = () => ({ type: POPULATE_PULSEOX_DATA });
