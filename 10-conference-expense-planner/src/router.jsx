import { createBrowserRouter } from "react-router";
import LandingPage from "./Pages/LandingPage";
import ProductSelectionPage from "./Pages/ProductSelectionPage";
import ContactPage from "./Pages/ContactPage";
import CheckoutPage from "./Pages/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/product-selection",
    element: <ProductSelectionPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);
