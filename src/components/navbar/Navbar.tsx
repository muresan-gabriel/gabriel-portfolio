import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import "./navbar.css";

import MobileNavigation from "./MobileNavigation.tsx";

export default function Navbar(props) {
  const location = useLocation();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/terminal") {
      setDisplay(false);
    } else if (location.pathname !== "/terminal") {
      setDisplay(true);
    }
  }, [location.pathname]);

  return (
    <nav
      style={{ display: display ? "flex" : "none" }}
      className="flex md:px-10 md:py-3 px-3 py-2 items-center place-content-between navbar-container"
    >
      <Link className="nav-brand" to="/">
        <img
          src="../img/logo-svg.svg"
          alt="Gabriel"
          className="nav-brand-img slideInFromTop-1 mix-blend-difference logo-black"
        />
      </Link>
      <div className="nav-links hidden md:flex">
        <Link
          to="/"
          className="hover:text-indigo-600 transition duration-50 slideInFromTop-2 nav-link"
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className="hover:text-indigo-600 transition duration-50 ease-in slideInFromTop-3 nav-link"
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          className="hover:text-indigo-600 transition duration-50 ease-in slideInFromTop-4 nav-link"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="hover:text-indigo-600 transition duration-50 ease-in slideInFromTop-5 nav-link"
        >
          Blog
        </Link>
      </div>
      <MobileNavigation></MobileNavigation>
    </nav>
  );
}
