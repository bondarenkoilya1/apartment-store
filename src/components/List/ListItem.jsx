import React from "react";

import PropTypes from "prop-types";

export const ListItem = ({ children, className, ...attrs }) => {
  return (
    <li className={`list-item ${className}`} {...attrs}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ListItem.defaultProps = {
  children: null,
  className: ""
};
