import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="space-x-5 p-5 w-full shadow-md sticky top-0 flex">
      <a
        href={`/`}
        className={location.pathname == "/" ? "font-bold" : "font-light"}
      >
        HOME
      </a>
      <a
        href={`/contact`}
        className={location.pathname == "/contact" ? "font-bold" : "font-light"}
      >
        CONTACT
      </a>
      <a
        href={`/about`}
        className={location.pathname == "/about" ? "font-bold" : "font-light"}
      >
        ABOUT
      </a>
    </header>
  );
};

export default Header;
