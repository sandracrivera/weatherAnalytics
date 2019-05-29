
import axios from 'axios';

// TODO:
// cache data retrieval (redux store or localStorage)
// probably for this case will be good to cache agencies, metrics,
// regions and stations (adding a caching expiration)

export const fetchStationsByRegion = ({ region }) => {
  const apiUrl = `${process.env.REACT_APP_BASE_DOMAIN}/weather/v1/station/${region}`;
  return axios.get(apiUrl)
}

export const fetchValuesByStationMetric = ({ stations, metric, dates}) => {
  const metricStr = `metric/${metric}`;
  const dateStr = `start=${dates[0]}&end=${dates[1]}`;

  return Promise.all(
    stations.map(station => {
      const stationStr = `station/${station}`;
      const apiUrl = `${process.env.REACT_APP_BASE_DOMAIN}/weather/v1/${stationStr}/${metricStr}/values/?${dateStr}`;
      return axios.get(apiUrl)
    })
  );
}