import { SET_FILTERS } from '../types/filters';

export const setFilters = ({ filter, value }) => ({
  type: SET_FILTERS,
  payload: {
    filter,
    value
  }
});
