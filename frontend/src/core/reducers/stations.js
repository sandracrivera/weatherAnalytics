import { 
  GET_STATIONS_BY_REGION_SUCCESS,
  GET_STATIONS_BY_REGION_FAILURE,
  GET_STATIONS_BY_REGION_LOADING,
  GET_VALUES_BY_STATION_METRIC_SUCCESS,
  GET_VALUES_BY_STATION_METRIC_FAILURE,
  GET_VALUES_BY_STATION_METRIC_LOADING
} from '../types/stations';

const defaultState = {
  list: [],
  isLoading: false,
  error: '',
  values: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_STATIONS_BY_REGION_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: '',
        list: []
      };
    case GET_STATIONS_BY_REGION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        list: action.payload.stations
      };
    case GET_STATIONS_BY_REGION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        list: []
      };
    case GET_VALUES_BY_STATION_METRIC_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: '',
        values: []
      };
    case GET_VALUES_BY_STATION_METRIC_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          values: action.payload.values
        };
      case GET_VALUES_BY_STATION_METRIC_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          values: []
        };
    default:
      return { ...state };
  }
};
