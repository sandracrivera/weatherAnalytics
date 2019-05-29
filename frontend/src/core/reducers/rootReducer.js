import {combineReducers} from "redux";

import agencies from "./agencies";
import metrics from "./metrics";
import stations from "./stations";
import filters from "./filters";
import breakpoints from "./breakpoints";

const rootReducer = combineReducers({
  agencies,
  metrics,
  stations,
  filters,
  breakpoints
});

export default rootReducer;