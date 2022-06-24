import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import menu from "../../assets/imgs/menu.png";
const headerData = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Blog", href: "blog" },
  { name: "Contacts", href: "contacts" },
];
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbarc navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink className="navbar-brand logo" to="/">
              Abdelmjid
              <span>
                <b style={{color: "#4BFFA6"}}> Saber</b>
              </span>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <img src={menu} alt="menu" style={{ width: "45px" }} />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {headerData.map((item) => (
                  <li className="nav-item" key={item.name}>
                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to={item.href}
                      exact
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
