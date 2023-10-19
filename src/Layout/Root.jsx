import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../Pages/Home/Footer";
import AuthProvider from "../Providers/AuthProvider";
import ThemeProvider from "../Providers/ThemeProvider";

const Root = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Root;
