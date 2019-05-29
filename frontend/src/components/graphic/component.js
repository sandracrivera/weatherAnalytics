import React, { PureComponent } from "react";
import PropTypes from "prop-types"

class Graphic extends PureComponent {
  static propTypes = {
    values: PropTypes.array
  };

  renderPoints = this.renderPoints.bind(this);

  renderPoints({ station, points }) {
    return (
      <div className="graphic__station">
        <span>{station}</span>
        {points.map(point => <span>point</span>)}
      </div>
    )
  }

  render() {
    return (
      <div className="graphic">
        {Object.entries(this.props.values).map(this.renderPoints)}
      </div>
    );
  }
}

export default Graphic;