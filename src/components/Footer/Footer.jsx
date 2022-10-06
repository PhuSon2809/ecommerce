import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">Multimart</h1>
              </div>
            </div>
            <p className="footerText mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              id fuga dolores blanditiis. Quaerat, ullam, similique laboriosam
              necessitatibus quibusdam tempora repellendus voluptas pariatur
              aliquam, voluptatem error. Fugiat iusto obcaecati dolore.
            </p>
          </Col>
          <Col lg="3">
            <div className="quickLink">
              <h4 className="quickLinkTitle">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="quickLink">
              <h4 className="quickLinkTitle">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="quickLink">
              <h4 className="quickLinkTitle">Contact</h4>
              <ListGroup className="contact">
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>300B Tran Phu, District 5, Ho Chi Minh City, Vietnam</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+84 914360736</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>tranphuson28@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="copyright">Copyright @{year} by TranPhuSon</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
