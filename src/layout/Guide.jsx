import React from "react";

import { GuideList } from "../components";

export const Guide = () => {
  return (
    <section className="guide">
      <div className="container">
        <GuideList className="list-reset guide__list" />
      </div>
    </section>
  );
};
