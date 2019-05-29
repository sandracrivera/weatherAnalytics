import { 
  GET_AGENCIES_SUCCESS,
  GET_AGENCIES_FAILURE,
  GET_AGENCIES_LOADING,
  GET_REGIONS_BY_AGENCY_SUCCESS,
  GET_REGIONS_BY_AGENCY_FAILURE,
  GET_REGIONS_BY_AGENCY_LOADING
} from '../types/agencies';

const defaultState = {
  list: [],
  regions: [],
  isLoading: false,
  error: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_AGENCIES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        error: '',
        list: []
      };
    case GET_AGENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        list: action.payload.agencies
      };
    case GET_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        list: []
      };
      case GET_REGIONS_BY_AGENCY_LOADING:
        return {
          ...state,
          isLoading: action.payload,
          error: '',
          regions: []
        };
      case GET_REGIONS_BY_AGENCY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          regions: action.payload.regions
        };
      case GET_REGIONS_BY_AGENCY_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          regions: []
        };
    default:
      return { ...state };
  }
};
