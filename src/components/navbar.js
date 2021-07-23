import React, { useState } from "react";
import data from "../assets/data";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const icon_humburger = require("../assets/images/icon-hamburger.svg").default;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-nav">
        <h2 className="header-nav-logo">the planets</h2>

        <div className={`header-nav-links ${isOpen ? "mobile-nav-links" : ""}`}>
          {data.map((planet) => {
            return (
              <div key={planet.id} className="nav-link">
                <div
                  className="planet-circle-block"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <div className={`circle ${planet.name}-circle`}></div>
                </div>
                <Link
                  className="link"
                  to={`/planets/${planet.id}`}
                  onClick={() => {
                    if (isOpen) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {planet.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div
          className="humburger-block"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src={icon_humburger} alt="humburger" className="humburger" />
        </div>
      </div>
      <div className="header-sepration-line"></div>
    </div>
  );
};

export default Navbar;
