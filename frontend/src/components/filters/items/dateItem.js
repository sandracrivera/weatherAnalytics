import React from "react";
import PropTypes from "prop-types";
import { Form, DatePicker } from "antd";

import { DATES } from "../../../core/utilities/constants";

const { Item } = Form;
const { RangePicker } = DatePicker;

const DateItem = ({ form, handleFilterChange  }) => {

  const onChange = (dates, dateString) => {
    handleFilterChange(DATES)(dateString)
  }

  return (
    <Item label="Dates">
      {form.getFieldDecorator("dates", {
        rules: [{ required: true, message: "Please select the dates" }],
      })(
        <RangePicker format="YYYY-MM-DD" onChange={onChange}/>
      )}
    </Item>
  );
}

DateItem.propTypes = {
  form: PropTypes.object.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};

export default DateItem;