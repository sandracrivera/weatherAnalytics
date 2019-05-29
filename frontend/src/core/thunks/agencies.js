import {
  getAgenciesLoading,
  getAgenciesSuccess,
  getAgenciesFailure,
  getRegionsByAgencyLoading,
  getRegionsByAgencySuccess,
  getRegionsByAgencyFailure
} from '../actions/agencies';
import { 
  fetchAllAgencies,
  fetchRegionsByAgency
} from "../api/agencies";

export const getAllAgencies = () => {
  return dispatch => {
    dispatch(getAgenciesLoading({ isLoading: true }));
    return fetchAllAgencies()
      .then(response => 
        dispatch(getAgenciesSuccess({ agencies: response.data })))
      .catch(error => 
        dispatch(getAgenciesFailure({ error })));
  };
};

export const getRegionsByAgency = ({ agency }) => {
  return dispatch => {
    dispatch(getRegionsByAgencyLoading({ isLoading: true }));
    return fetchRegionsByAgency({ agency})
      .then(response => 
        dispatch(getRegionsByAgencySuccess({ regions: response.data })))
      .catch(error => 
        dispatch(getRegionsByAgencyFailure({ error })));
  };
};

