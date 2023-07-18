import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
const Header = () => {
  const nav_links = [
    {
      path: "/home",
      display: "Home",
    },
    // {
    //   path: "/about",
    //   display: "About",
    // },
    {
      path: "/tours",
      display: "Tours",
    },
  ];

  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <Navbar expand="md" className="">
            {/* ====== Logo ====== */}
            <div href="/home" className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/* ====== Logo End ====== */}
            <div className="nav__right d-flex align-items-center gap-4 d-md-none">
              <div className="nav__btns d-flex align-content-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mx-auto" navbar>
                {/* <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem> */}
                {/* ======= Menu Start ======= */}
                {/* <div className="navigation"> */}
                {/* <ul className="menu  align-items-center gap-5 "> */}
                {nav_links.map((item, index) => (
                  <NavItem className="nav__item mx-md-3" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </NavItem>
                ))}
                {/* </ul> */}
                {/* </div> */}
                {/* ======= Menu End ======= */}
              </Nav>
              {/* ======= Menu End ======= */}
            </Collapse>
            <div className="nav__right d-md-flex align-items-center gap-4 d-none">
              <div className="nav__btns d-flex align-content-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
