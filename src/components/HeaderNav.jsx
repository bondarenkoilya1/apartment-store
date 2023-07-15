import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import { headerNavItems } from "../data";
import { List, ListItem } from "./List";

export const HeaderNav = ({ className, ...attrs }) => {
  return (
    <nav className={className} {...attrs}>
      <List className="list-reset header__nav-list">
        {headerNavItems &&
          headerNavItems.map(({ text, id, href }) => (
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

HeaderNav.propTypes = {
  className: PropTypes.string
};

HeaderNav.defaultProps = {
  className: ""
};
