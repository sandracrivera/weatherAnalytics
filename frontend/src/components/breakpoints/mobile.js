import React from "react";
import PropTypes from "prop-types";

import Devices from "./devices";
import { MOBILE } from "../../core/utilities/constants";

const Mobile = ({ children }) => <Devices sizes={[MOBILE]}>{children}</Devices>;

Mobile.propTypes = {
  children: PropTypes.any
};

export default Mobile;
