import React from "react";

import PropTypes from "prop-types";

export const List = ({ children, className, tag: Tag, ...attrs }) => {
  return (
    <Tag className={`list ${className}`} {...attrs}>
      {children}
    </Tag>
  );
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

List.defaultProps = {
  children: null,
  className: "",
  tag: "ul"
};
