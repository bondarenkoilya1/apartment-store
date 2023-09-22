import React from "react";

import { Button } from "../Button";
import { PollBlockList } from "./PollBlockList";

export const PollBlock = () => {
  return (
    <div className="poll-block">
      <div className="poll-block__img"></div>
      <div className="poll-block__info">
        <p className="poll-block__text">
          Time to complete the survey is{" "}
          <span className="poll-block__text--highlighted">3 minutes</span>
        </p>
        <h1 className="poll-block__title">I want to sell or buy an apartment safely and easily</h1>
        <Button className="btn-reset poll-block__button">Get started</Button>
        <PollBlockList />
      </div>
    </div>
  );
};
