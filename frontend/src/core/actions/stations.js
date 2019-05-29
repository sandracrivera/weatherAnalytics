import { 
  GET_STATIONS_BY_REGION_SUCCESS,
  GET_STATIONS_BY_REGION_FAILURE,
  GET_STATIONS_BY_REGION_LOADING,
  GET_VALUES_BY_STATION_METRIC_SUCCESS,
  GET_VALUES_BY_STATION_METRIC_FAILURE,
  GET_VALUES_BY_STATION_METRIC_LOADING
} from '../types/stations';


export const getStationsByRegionLoading = isLoading => ({
  type: GET_STATIONS_BY_REGION_LOADING,
  payload: isLoading
});

export const getStationsByRegionSuccess = stations => ({
  type: GET_STATIONS_BY_REGION_SUCCESS,
  payload: stations
});

export const getStationsByRegionFailure = error  => ({
  type: GET_STATIONS_BY_REGION_FAILURE,
  payload: error
});

export const getValuesByStationMetricLoading = isLoading => ({
  type: GET_VALUES_BY_STATION_METRIC_LOADING,
  payload: isLoading
});

export const getValuesByStationMetricSuccess = values => ({
  type: GET_VALUES_BY_STATION_METRIC_SUCCESS,
  payload: values
});

export const getValuesByStationMetricFailure = error => ({
  type: GET_VALUES_BY_STATION_METRIC_FAILURE,
  payload: error
});


