import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export { App };
