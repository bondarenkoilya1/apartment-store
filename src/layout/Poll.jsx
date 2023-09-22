import React from "react";

import { PollBlock } from "../components/PollBlock";

export const Poll = () => {
  return (
    <section className="poll">
      <div className="container">
        <h2 className="poll__title">
          Take a small survey and find out how to{" "}
          <span className="poll__title--highlighted">avoid risks</span> when selling or buying an
          apartment
        </h2>
        <PollBlock />
      </div>
    </section>
  );
};
