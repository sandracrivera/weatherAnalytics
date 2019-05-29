import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";

import { REGION } from "../../../core/utilities/constants";

const { Item } = Form;
const { Option } = Select;

const RegionsItem = ({ form, regions, handleFilterChange  }) => {

  const renderSelectOptions = option => 
    <Option key={option.id} value={option.id}>{option.name}</Option>
  
  return (
    <Item label="Region">
      {form.getFieldDecorator("regions", {
        rules: [{ required: true, message: "Please select a region" }],
      })(
        <Select
          onChange={handleFilterChange(REGION)}
          placeholder="Select a region"
        >
          {regions && regions.map(renderSelectOptions)}
        </Select>
      )}
    </Item>
  );
}

RegionsItem.propTypes = {
  form: PropTypes.object.isRequired,
  regions: PropTypes.array,
  handleFilterChange: PropTypes.func.isRequired
};

export default RegionsItem;