import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return `footer-link ${location.pathname === path ? "active" : ""}`;
  };

  return (
    <footer className="footer">
      <Link to="/en" className={`${getLinkClass("/en")} footer-link-en`}>
        English
      </Link>
      <span className="footer-divider">|</span>
      <Link to="/es" className={`${getLinkClass("/es")} footer-link-es`}>
        Español
      </Link>
      <span className="footer-divider">|</span>
      <Link to="/ca" className={`${getLinkClass("/ca")} footer-link-ca`}>
        Català
      </Link>
    </footer>
  );
};

export default Footer;
