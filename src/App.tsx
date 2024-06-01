import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";

const RootLayout = lazy(() => import("./layouts/RootLayout"));
const BreadcrumbLayout = lazy(() => import("./layouts/BreadcrumbLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Category = lazy(() => import("./pages/Category"));
const Contact = lazy(() => import("./pages/Contact"));
const Faqs = lazy(() => import("./pages/Faqs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ReturnRefundPolicy = lazy(() => import("./pages/ReturnRefundPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const WishList = lazy(() => import("./pages/WishList"));

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
              path: "",
              element: <AuthLayout />,
              children: [
                {
                  path: "login",
                  element: <Login />,
                },
                {
                  path: "register",
                  element: <Register />,
                },
                {
                  path: "reset-password",
                  element: <ResetPassword />,
                },
              ],
            },
            {
              path: "about-us",
              element: <About />,
            },
            {
              path: "cart",
              element: <Cart />,
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
            {
              path: "wishlist",
              element: <WishList />,
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
