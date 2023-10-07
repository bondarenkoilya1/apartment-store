import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../components";
import { List, ListItem } from "../components/List";
import { footerListItemsGeneral, footerListItemsWorkingHours } from "../data/footerListItems";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo className="logo--light" />
        <List className="list-reset footer__list-general">
          {footerListItemsGeneral &&
            footerListItemsGeneral.map(({ text, id, className, href, target }) => (
              <ListItem key={id} className="footer__list-general-item">
                <Link
                  to={href}
                  target={target || "_self"}
                  className={`footer__list-text footer__list-general-link ${className}`}>
                  {text}
                </Link>
              </ListItem>
            ))}
        </List>
        <List className="list-reset footer__list-additional">
          <h5 className="footer__list-additional-title">Working hours</h5>
          {footerListItemsWorkingHours &&
            footerListItemsWorkingHours.map(({ text, id }) => (
              <ListItem key={id} className={"footer__list-text footer__list-additional-item"}>
                {text}
              </ListItem>
            ))}
        </List>
      </div>
    </footer>
  );
};
