import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import BrandShowcase from "../Pages/BrandShowcase/BrandShowcase";
import Cart from "../Pages/Cart/Cart";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("data.json"),
      },
      {
        path: "brand/:category",
        element: (
          <PrivateRoute>
            <BrandShowcase />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
