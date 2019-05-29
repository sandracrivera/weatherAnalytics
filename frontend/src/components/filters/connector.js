import { connect } from "react-redux";

import { setScreenBreakpoint } from "../../core/actions/breakpoints";
import { setFilters } from "../../core/actions/filters";
import { getAllMetrics } from "../../core/thunks/metrics";
import { getStationsByRegion, getValuesByStationMetric } from "../../core/thunks/stations";
import { 
  getRegionsByAgency,
  getAllAgencies 
} from "../../core/thunks/agencies";

import App from "./component";

const mapStateToProps = state => ({
  filters: state.filters,
  agencies: state.agencies.list,
  regions: state.agencies.regions,
  metrics: state.metrics.list,
  stations: state.stations.list,
})

const mapDispatchToProps = dispatch => ({
  setScreenBreakpoint: currentBreakpoint =>
    dispatch(setScreenBreakpoint({ currentBreakpoint })),
  setFilters: ({ filter, value }) =>
    dispatch(setFilters({ filter, value })),
  getAllAgencies: () => dispatch(getAllAgencies()),
  getRegionsByAgency: ({ agency }) =>
    dispatch(getRegionsByAgency({ agency })),
  getAllMetrics: () => dispatch(getAllMetrics()),
  getStationsByRegion: ({ region }) =>
    dispatch(getStationsByRegion({ region })),
  getValuesByStationMetric: ({ stations, metric, dates }) =>
    dispatch(getValuesByStationMetric({ stations, metric, dates }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
