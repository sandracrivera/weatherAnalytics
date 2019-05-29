import React from "react";
import PropTypes from "prop-types";

import Devices from "./devices";
import { DESKTOP } from "../../core/utilities/constants";

const Desktop = ({ children }) => (
  <Devices sizes={[DESKTOP]}>{children}</Devices>
);

Desktop.propTypes = {
  children: PropTypes.any
};

export default Desktop;
