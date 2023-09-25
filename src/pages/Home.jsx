import React from "react";

import { Assistance, Guide, Poll } from "../layout";

export const Home = () => {
  return (
    <main className="main">
      <Assistance />
      <Guide />
      <Poll />
    </main>
  );
};
