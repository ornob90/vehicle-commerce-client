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

import { BASE_URL } from "../API/api";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "brand/:category",
        element: (
          <PrivateRoute>
            <BrandShowcase />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`${BASE_URL}/products/${params.category}`),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${BASE_URL}/product/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () => fetch(`${BASE_URL}/carts`),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`${BASE_URL}/product/${params.id}`),
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
