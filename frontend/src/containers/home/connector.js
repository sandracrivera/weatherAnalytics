import { connect } from "react-redux";

import Home from "./container";

const mapStateToProps = state => ({
  values: state.stations.values,
  stations: state.stations.list
});

export default connect(mapStateToProps)(Home);
