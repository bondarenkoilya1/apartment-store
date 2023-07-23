import React from "react";

import { GuideList } from "../components";
import { guideListItems } from "../data";

export const Guide = () => {
  console.log(guideListItems);

  return (
    <section className="guide">
      <div className="container">
        <GuideList className="list-reset guide__list" />
      </div>
    </section>
  );
};
