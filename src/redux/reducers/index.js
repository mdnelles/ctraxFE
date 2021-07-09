//import dateFilter from "../../common/components/date-filter-dialog/state/reducers";
import { combineReducers } from "redux";
import user from "../../common/state/user/reducers";
import dailyhr from "../../common/state/dailyhr/reducers";
import dailies from "../../common/state/dailies/reducers";
import epoch from "../../common/state/epoch/reducers";
import pulseox from "../../common/state/pulseox/reducers";
import respiration from "../../common/state/respiration/reducers";
import sleep from "../../common/state/sleep/reducers";
import stress from "../../common/state/stress/reducers";

export default combineReducers({
   user,
   dailyhr,
   dailies,
   epoch,
   pulseox,
   respiration,
   sleep,
   stress,
});
