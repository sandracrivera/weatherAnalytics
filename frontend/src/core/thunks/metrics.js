import {
  getMetricsLoading,
  getMetricsSuccess,
  getMetricsFailure
} from '../actions/metrics';
import { fetchAllMetrics } from "../api/metrics";

export const getAllMetrics = () => {
  return dispatch => {
    dispatch(getMetricsLoading({ isLoading: true }));
    return fetchAllMetrics()
      .then(response => 
        dispatch(getMetricsSuccess({ metrics: response.data })))
      .catch(error => 
        dispatch(getMetricsFailure({ error })));
  };
};
