  import React, { Component } from 'react';
  import {Line as LineChart} from 'react-chartjs';
  import PropTypes from "prop-types";

  import { getLineProps, options, styles } from "./utilities";
  
  class Chart extends Component {
    state = {
      data: {
        labels: [],
        datasets: [
          {
            label: "Initial",
            data: []
          }
        ]
      }
    }

    static propTypes = {
      values: PropTypes.array,
      stations: PropTypes.array
    }

    renderChartData = this.renderChartData.bind(this)

    renderChartData() {
      const { stations, values } = this.props; 
      const data = { labels: [], datasets: []};

      // format the data for the chart
      for (let i=0; i < stations.length; i++) {  
        const stationData = [];
        const baseStation = stations[i];
         
        // eslint-disable-next-line no-loop-func
        Object.entries(values).forEach( ([key, value], index) => {
          // add label
          if (!data.labels.includes(key)) data.labels.push(key);

          // add station or null
          // the graph requires null for non existing values in an specific label
          // TODO:
          // need to find how to replace data points for string in the Y axis
          const station = value.includes(baseStation) ? i : null;
          stationData[i] = [...stationData[i] || [], station]
        })

        // for now I'm adding random colours
        data.datasets.push({
          ...getLineProps({ label: stations[i] }),         
          data: stationData[i]
        })
      }

      this.setState({ data });
    }

    componentDidUpdate(prevProps) {
      this.props.values !== prevProps.values && this.renderChartData();    
    }
  
    render() {
      return (
        <div style={styles.graphContainer}>
          <div>
            {}
          </div>
          <LineChart data={this.state.data}
            redraw
            options={options}
            width="600" height="250"/>
        </div>
      )
    }
  }
  
  export default Chart;