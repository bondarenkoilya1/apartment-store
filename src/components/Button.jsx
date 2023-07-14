import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const Button = ({ children, className, ...attrs }) => {
  const Tag = attrs.to ? Link : "button";

  return (
    <Tag className={className} {...attrs}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: ""
};
