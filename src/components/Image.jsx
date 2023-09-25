import React from "react";

import PropTypes from "prop-types";

export const Image = ({ className, src, alt, width, height, ...attrs }) => {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return <img className={className} src={src} alt={alt} width={width} height={height} {...attrs} />;
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  className: "",
  src: "",
  width: 100,
  height: 100
};
