import React from "react";
import Container from "../../components/Shared/Container";
import { NavLink, useLocation } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

const Footer = () => {
  const { pathname } = useLocation();
  const { isDark } = useTheme();
  return (
    <footer
      className={`footer pt-24 p-10  text-base-content w-full max-w-[1440px] mx-auto  ${
        pathname === "/login" || pathname === "/signup" ? "hidden" : ""
      } ${isDark ? "bg-[#121212] text-white" : "bg-base-200"}`}
    >
      <aside className="">
        <NavLink className="text-lg md:text-2xl">VehicleCommerce</NavLink>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable service since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Rentals</a>
        <a className="link link-hover">Repairs</a>
        <a className="link link-hover">Inspections</a>
        <a className="link link-hover">Maintenance</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
