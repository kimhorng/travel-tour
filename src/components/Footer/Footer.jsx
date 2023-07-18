import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const quick_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quick_links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Traveling opens the door the creating memeories</p>

              <div className="social__links d-flex align-items-center gap-4 ">
                <span>
                  <Link to={"#"}>
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0 ">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0 ">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center ">
                    <i className="ri-map-pin-line px-1"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">Phnom Penh, Cambodia</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center ">
                    <i className="ri-mail-line px-1"></i>
                    Email:
                  </span>
                </h6>
                <p className="mb-0">kimhorng2001@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3 ">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center ">
                    <i className="ri-phone-fill px-1"></i>
                    Phone:
                  </span>
                </h6>
                <p className="mb-0">+855975945378</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, design and develop by Kimhorng Horn. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
