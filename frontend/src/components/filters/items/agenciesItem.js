import React from "react";
import PropTypes from "prop-types";
import { Form, Select} from "antd";

import { AGENCY } from "../../../core/utilities/constants";

const { Item } = Form;
const { Option } = Select;

const AgenciesItem = ({ form, agencies, handleFilterChange  }) => {

  const renderSelectOptions = option =>  
    <Option key={option.id} value={option.id}>{option.name}</Option>
  
  console.log("agencies", agencies.length)

  return (
    <Item label="Agency">
      {form.getFieldDecorator("agency", {
        rules: [{ required: true, message: "Please select a agency" }],
      })(

        <Select
          onChange={handleFilterChange(AGENCY)}
          placeholder="Select a agency"
        >
          {agencies && agencies.map(renderSelectOptions)}
        </Select>
      )}
    </Item>
  );
}

AgenciesItem.propTypes = {
  form: PropTypes.object.isRequired,
  agencies: PropTypes.array,
  handleFilterChange: PropTypes.func.isRequired
};

export default AgenciesItem;