import { 
  GET_METRICS_SUCCESS,
  GET_METRICS_FAILURE,
  GET_METRICS_LOADING
} from '../types/metrics';


export const getMetricsLoading = isLoading => ({
  type: GET_METRICS_LOADING,
  payload: isLoading
});

export const getMetricsSuccess = metrics => ({
  type: GET_METRICS_SUCCESS,
  payload: metrics
});

export const getMetricsFailure = error  => ({
  type: GET_METRICS_FAILURE,
  payload: error
})
