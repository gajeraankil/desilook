import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const RootLayout = lazy(() => import("./layouts/RootLayout"));
const BreadcrumbLayout = lazy(() => import("./layouts/BreadcrumbLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Category = lazy(() => import("./pages/Category"));
const Contact = lazy(() => import("./pages/Contact"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ReturnRefundPolicy = lazy(() => import("./pages/ReturnRefundPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "",
          element: <BreadcrumbLayout />,
          children: [
            {
              path: "about-us",
              element: <About />,
            },
            {
              path: "category/:category",
              element: <Category />,
            },
            {
              path: "contact-us",
              element: <Contact />,
            },
            {
              path: "faqs",
              element: <Faqs />,
            },
            {
              path: "privacy-policy",
              element: <PrivacyPolicy />,
            },
            {
              path: "return-and-refund-policy",
              element: <ReturnRefundPolicy />,
            },
            {
              path: "shipping-policy",
              element: <ShippingPolicy />,
            },
            {
              path: "terms-and-conditions",
              element: <TermsConditions />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
