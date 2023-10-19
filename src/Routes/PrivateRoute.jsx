import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return "loading";
  } else if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
