import { SET_FILTERS } from '../types/filters';
import {
  AGENCY,
  REGION,
  STATION,
  METRIC,
  DATES
} from "../utilities/constants";

const defaultState = {
  [AGENCY]: "",
  [REGION]: "",
  [METRIC]: "",
  [STATION]: [],
  [DATES]: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        [action.payload.filter]: action.payload.value
      };
    default:
      return { ...state };
  }
};
