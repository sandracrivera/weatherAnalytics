import { 
  GET_METRICS_SUCCESS,
  GET_METRICS_FAILURE,
  GET_METRICS_LOADING,
} from '../types/metrics';

const defaultState = {
  list: [],
  isLoading: false,
  error: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_METRICS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: '',
        list: []
      };
    case GET_METRICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        list: action.payload.metrics
      };
    case GET_METRICS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        list: []
      };
    default:
      return { ...state };
  }
};
