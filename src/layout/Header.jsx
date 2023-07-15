import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as PhoneIcon } from "../assets/images/home_header/phone.svg";
import { Button, HeaderNav, List } from "../components";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h2 className="header__title">
          <Link to="/" className="header__logo">
            APARTMENTS
            <span className="span--block header__logo-subtitle">store</span>
          </Link>
        </h2>
        <HeaderNav className="header__nav" />
        <List className=" list-reset header__functions">
          <a href="tel:+12317495765" className="header__functions-phone">
            <PhoneIcon className="header__functions-phone-icon" />
            <span className="header__functions-phone-text">+ 1 231 749 5765</span>
          </a>
          <Button className="btn-reset header__functions-callback">Call back</Button>
        </List>
      </div>
    </header>
  );
};
