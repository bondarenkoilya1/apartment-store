import React from "react";

import PropTypes from "prop-types";

import { guideListItems } from "../data";
import { Image } from "./Image";
import { List, ListItem } from "./List";

export const GuideList = ({ className, ...attrs }) => {
  return (
    <List tag="ol" className={className} {...attrs}>
      {guideListItems &&
        guideListItems.map(({ text, id, imageSrc, imageAlt, imageWidth, imageHeight }) => (
          <ListItem key={id} className="guide__list-item">
            <p className="guide__list-text">{text}</p>
            <Image
              src={imageSrc}
              className="guide__list-image"
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
            />
          </ListItem>
        ))}
    </List>
  );
};

GuideList.propTypes = {
  className: PropTypes.string
};

GuideList.defaultProps = {
  className: ""
};
