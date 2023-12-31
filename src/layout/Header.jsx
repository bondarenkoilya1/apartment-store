import React from "react";

import { ReactComponent as PhoneIcon } from "../assets/images/phone.svg";
import { HeaderNav, List, Logo } from "../components";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <HeaderNav />
        <List className="list-reset header__functions">
          <a href="tel:+380998686456" className="header__functions-phone">
            <PhoneIcon className="header__functions-phone-icon" />
            <span className="header__functions-phone-text">+ 380 99 868 6456</span>
          </a>
          <a href="tel:+380998686456" className="header__functions-callback">
            Call back
          </a>
        </List>
      </div>
    </header>
  );
};
