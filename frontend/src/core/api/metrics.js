
import axios from 'axios';

// TODO:
// cache data retrieval (redux store or localStorage)
// probably for this case will be good to cache agencies, metrics,
// regions and stations (adding a caching expiration)

export const fetchAllMetrics = () => {
  const apiUrl = `${process.env.REACT_APP_BASE_DOMAIN}/weather/v1/metrics`;
  return axios.get(apiUrl)
}