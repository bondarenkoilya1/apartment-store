import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Error } from "./pages";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
