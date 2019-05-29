import { 
  GET_AGENCIES_SUCCESS,
  GET_AGENCIES_FAILURE,
  GET_AGENCIES_LOADING,
  GET_REGIONS_BY_AGENCY_SUCCESS,
  GET_REGIONS_BY_AGENCY_FAILURE,
  GET_REGIONS_BY_AGENCY_LOADING 
} from '../types/agencies';


export const getAgenciesLoading = isLoading => ({
  type: GET_AGENCIES_LOADING,
  payload: isLoading
});

export const getAgenciesSuccess = agencies => ({
  type: GET_AGENCIES_SUCCESS,
  payload: agencies
});

export const getAgenciesFailure = error  => ({
  type: GET_AGENCIES_FAILURE,
  payload: error
})

export const getRegionsByAgencyLoading = isLoading => ({
  type: GET_REGIONS_BY_AGENCY_LOADING,
  payload: isLoading
});

export const getRegionsByAgencySuccess = regions => ({
  type: GET_REGIONS_BY_AGENCY_SUCCESS,
  payload: regions
});

export const getRegionsByAgencyFailure = error  => ({
  type: GET_REGIONS_BY_AGENCY_FAILURE,
  payload: error
})
