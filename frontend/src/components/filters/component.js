import React, { PureComponent } from "react";
import PropTypes from "prop-types"

import {
  Form,
  Button
} from "antd";

import {
  AGENCY,
  REGION,
} from "../../core/utilities/constants";

import AgenciesItem from "./items/agenciesItem";
import RegionsItem from "./items/regionsItem";
import MetricsItem from "./items/metricsItem";
import StationsItem from "./items/stationsItem";
import DateItem from "./items/dateItem";

import "./styles.css";

class Filters extends PureComponent {
  static propTypes = {
    agencies: PropTypes.array,
    regions: PropTypes.array,
    metrics: PropTypes.array,
    stations: PropTypes.array,
    filters: PropTypes.object,
    form: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
    getAllAgencies: PropTypes.func.isRequired,
    getRegionsByAgency: PropTypes.func.isRequired,
    getAllMetrics: PropTypes.func.isRequired,
    getStationsByRegion: PropTypes.func.isRequired,
    getValuesByStationMetric: PropTypes.func.isRequired
  };

  handleSubmit = this.handleSubmit.bind(this);

  componentDidMount() {
    this.props.getAllAgencies();
    this.props.getAllMetrics();
  }

  handleFilterChange = filter => value => {
    this.props.setFilters({ filter, value })
    filter === AGENCY && this.props.getRegionsByAgency({ [AGENCY]: value});
    filter === REGION && this.props.getStationsByRegion({ [REGION]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.getValuesByStationMetric({ 
          stations: values.station, 
          metric: values.metric, 
          dates: this.props.filters.dates
        });
      }
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <AgenciesItem
          form={this.props.form}
          agencies={this.props.agencies}
          handleFilterChange={this.handleFilterChange}
        />

        <RegionsItem
          form={this.props.form}
          regions={this.props.regions}
          handleFilterChange={this.handleFilterChange}
        />

        <MetricsItem
          form={this.props.form}
          metrics={this.props.metrics}
          handleFilterChange={this.handleFilterChange}
        />

        <StationsItem
          form={this.props.form}
          stations={this.props.stations}
          handleFilterChange={this.handleFilterChange}
        />

        <DateItem
          form={this.props.form}
          handleFilterChange={this.handleFilterChange}
        />

        <Button type="primary" htmlType="submit">
          Plot
        </Button>

      </Form>
    );
  }
}

export default Form.create()(Filters);