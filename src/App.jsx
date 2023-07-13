import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./layout/Header";
import { Error, Home } from "./pages";

export const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
