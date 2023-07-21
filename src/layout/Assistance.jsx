import React from "react";

import { Button } from "../components/Button";

export const Assistance = () => {
  return (
    <section className="assistance">
      <div className="container">
        <p className="assistance__subtitle">Confused by complex terms and documents?</p>
        <h1 className="assistance__title">
          Find out what <span className="assistance__title--highlighted">documents</span> to prepare
          and what to consider when{" "}
          <span className="assistance__title--highlighted">selling and buying</span> an apartment
        </h1>
        <Button to="/" className="assistance__link">
          Want to know more
        </Button>
      </div>
    </section>
  );
};
