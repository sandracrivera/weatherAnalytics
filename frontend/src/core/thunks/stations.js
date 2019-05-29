import {
  getStationsByRegionLoading,
  getStationsByRegionSuccess,
  getStationsByRegionFailure,
  getValuesByStationMetricLoading,
  getValuesByStationMetricSuccess,
  getValuesByStationMetricFailure
} from '../actions/stations';
import { 
  fetchStationsByRegion,
  fetchValuesByStationMetric 
} from "../api/stations";
import { getMonth } from "../utilities/common";

export const getStationsByRegion = ({ region }) => {
  return dispatch => {
    dispatch(getStationsByRegionLoading({ isLoading: true }));
    return fetchStationsByRegion({ region })
      .then(response => 
        dispatch(getStationsByRegionSuccess({ stations: response.data })))
      .catch(error => 
        dispatch(getStationsByRegionFailure({ error })));
  };
};

export const getValuesByStationMetric = ({ stations, metric, dates }) => {
  return dispatch => {
    dispatch(getValuesByStationMetricLoading({ isLoading: true }));
    return fetchValuesByStationMetric({ stations, metric, dates })
      .then(response => {
        const values = {};

        // for each station
        for (var resp of response) {
          const stationData = resp.data;

          // get the average value per station
          const data = stationData.points.reduce((a, { timestamp, value }) => {
            const month = getMonth({date: timestamp});
            a[month] = a[month] || { sum: 0, count: 0 };

            // check for invalid numbers
            a[month].sum += isNaN(value) || !value ? 0 : value;
            a[month].average = a[month].sum / ++a[month].count;
            return a;
          }, Object.create(null));

          // check if the value exceeds the average
          const total = stationData.points.length;
          for (let index = 0; index < total; index++) {
            const item = stationData.points[index];
            const month = getMonth({date: item.timestamp});

            // TODO:
            // change this to stop after we found at least
            // one value for month
            if (item.value > data[month].average) {
              if (!(values[month] || []).includes(stationData.name)) {
                values[month] = [...values[month] || [], stationData.name];
              }
            }
          }
        }
        dispatch(getValuesByStationMetricSuccess({ values }));
      })
      .catch(error => 
        dispatch(getValuesByStationMetricFailure({ error })))
  }
}
