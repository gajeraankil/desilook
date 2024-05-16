import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default RootLayout;
