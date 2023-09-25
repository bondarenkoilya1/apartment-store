import React from "react";

import { guideListItems } from "../data";
import { Image } from "./Image";
import { List, ListItem } from "./List";

export const GuideList = () => {
  return (
    <List tag="ol" className="list-reset guide__list">
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
