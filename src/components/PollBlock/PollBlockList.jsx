import React from "react";

import { pollListItems } from "../../data";
import { List, ListItem } from "../List";

export const PollBlockList = () => {
  return (
    <div className="poll-block__list-wrapper">
      <p className="poll-block__list-text">
        After completing the survey, you will receive a PDF file containing:
      </p>
      <List tag="ol" className="poll-block__list">
        {pollListItems &&
          pollListItems.map(({ id, text }) => (
            <ListItem key={id} className="poll-block__list-item">
              {text}
            </ListItem>
          ))}
      </List>
    </div>
  );
};
