import services from "./services";

export const DAILIES_SET_DATA = "DAILIES_SET_DATA";
export const DAILIES_CLEAR_DATA = "DAILIES_CLEAR_DATA";
export const POPULATE_DAILIES = "POPULATE_DAILIES";

export const dailiesSetData = (data) => ({ type: DAILIES_SET_DATA, data });
export const dailiesClearData = () => ({ type: DAILIES_CLEAR_DATA });
export const dailiespopData = () => ({ type: POPULATE_DAILIES });
