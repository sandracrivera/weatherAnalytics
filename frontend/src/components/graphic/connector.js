import { connect } from "react-redux";

import Graphic from "./component";

const mapStateToProps = state => ({
  values: state.stations.values
})

export default connect(mapStateToProps)(Graphic);
