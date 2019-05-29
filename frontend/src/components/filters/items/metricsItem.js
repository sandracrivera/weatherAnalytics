import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";

import { METRIC } from "../../../core/utilities/constants";

const { Item } = Form;
const { Option } = Select;

const MetricsItem = ({ form, metrics, handleFilterChange  }) => {

  const renderSelectOptions = option => 
    <Option key={option.id} value={option.id}>{option.name}</Option>
  
  return (
    <Item label="Metric">
      {form.getFieldDecorator("metric", {
        rules: [{ required: true, message: "Please select a metric" }],
      })(
        <Select
          onChange={handleFilterChange(METRIC)}
          placeholder="Select a region"
        >
          {metrics && metrics.map(renderSelectOptions)}
        </Select>
      )}
    </Item>
  );
}

MetricsItem.propTypes = {
  form: PropTypes.object.isRequired,
  metrics: PropTypes.array,
  handleFilterChange: PropTypes.func.isRequired
};

export default MetricsItem;