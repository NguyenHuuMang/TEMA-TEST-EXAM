import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import LandingPage from "../page/landing-page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
