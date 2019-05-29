import React from "react";
import PropTypes from "prop-types";
import { Form, Checkbox } from "antd";

import { STATION } from "../../../core/utilities/constants";

const { Item } = Form;
const CheckboxGroup = Checkbox.Group;

const StationsItem = ({ form, stations, handleFilterChange  }) => {

  const renderCheckBoxOptions = station => ({ label: station.name, value: station.id });
  
  return (
    <Item label="Stations">
      {form.getFieldDecorator("station", {
        rules: [{ required: true, message: "Please select at least one station" }],
      })(
        <CheckboxGroup
          options={stations && stations.map(renderCheckBoxOptions)}
          onChange={handleFilterChange(STATION)}
        />
      )}
    </Item>
  );
}

StationsItem.propTypes = {
  form: PropTypes.object.isRequired,
  stations: PropTypes.array,
  handleFilterChange: PropTypes.func.isRequired
};

export default StationsItem;