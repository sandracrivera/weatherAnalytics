import React from 'react';
import PropTypes from "prop-types";

import Chart from "../../components/chart";

const Home = ({ values, stations }) =>  {
  const getStationNames = () => stations.map(station => station.name);

  return (
    <div className='home'>
      <h4>**The graph plots a square point each day the metric value exceeds the historical average for the corresponding moth in the selected stations</h4>
      <Chart values={values} stations={getStationNames()} />
    </div>
  )
}

Home.propTypes = {
  values: PropTypes.array,
  stations: PropTypes.array
}

Home.defaultProps = {
  values: [],
  stations: []
}

export default Home;