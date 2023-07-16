import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const Logo = ({ className }) => {
  return (
    <h2 className={className}>
      <Link to="/" className="logo__link">
        APARTMENTS
        <span className="span--block logo__link-subtitle">store</span>
      </Link>
    </h2>
  );
};

Logo.propTypes = {
  className: PropTypes.string
};

Logo.defaultProps = {
  className: ""
};
