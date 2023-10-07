import React from "react";
import { NavLink } from "react-router-dom";

import { headerListItems } from "../data";
import { List, ListItem } from "./List";

export const HeaderNav = () => {
  return (
    <nav className="header__nav">
      <List className="list-reset header__nav-list">
        {headerListItems &&
          headerListItems.map(({ text, id, href }) => (
            <ListItem key={id} className="header__list-item">
              <NavLink to={href} className="header__list-link">
                {text}
              </NavLink>
            </ListItem>
          ))}
      </List>
    </nav>
  );
};
