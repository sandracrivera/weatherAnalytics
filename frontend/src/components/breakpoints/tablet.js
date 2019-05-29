import React from "react";
import PropTypes from "prop-types";

import Devices from "./devices";
import { TABLET } from "../../core/utilities/constants";

const Tablet = ({ children }) => <Devices sizes={[TABLET]}>{children}</Devices>;

Tablet.propTypes = {
  children: PropTypes.any
};

export default Tablet;
