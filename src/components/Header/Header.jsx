import React, { useRef } from "react";
import "./Header.scss";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const navLinks = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="navWrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {navLinks.map((navLink, index) => (
                  <li className="navItem" key={index}>
                    <NavLink
                      to={navLink.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : ""
                      }
                    >
                      {navLink.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="navIcons">
              <span className="favoIcon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cartIcon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>

              <span>
                <img src={userIcon} alt="avatar" />
              </span>

              <div className="mobileMenu">
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
