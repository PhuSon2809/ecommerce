import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import heroImg from "../assets/images/hero-img.png";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import Services from "../services/Services";
import "../styles/Home.scss";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { motion } from "framer-motion";

const Home = () => {
  const year = new Date().getFullYear();

  const [trendProducts, setTrendProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendProducts(filteredTrendProducts);
    setBestSalesProducts(filteredBestSaleProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <div className="home">
        <section className="hero">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="content">
                  <p className="subtitle">Trending product in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    in repellat fuga distinctio quae temporibus sed perferendis
                    delectus ratione nulla nam culpa facilis, quos itaque, sint
                    accusantium, esse eaque excepturi.
                  </p>

                  <button className="shopBtn">
                    <Link to="/shop">SHOP NOW</Link>
                  </button>
                </div>
              </Col>

              <Col lg="6" md="6">
                <img src={heroImg} alt="hero" className="image" />
              </Col>
            </Row>
          </Container>
        </section>

        <Services />

        <section className="trendingProducts">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section-title">Trending Products</h2>
              </Col>
              <ProductsList productsList={trendProducts} />
            </Row>
          </Container>
        </section>

        <section className="best_sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section-title">Best Sales</h2>
              </Col>
              <ProductsList productsList={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className="timerCount">
          <Container>
            <Row>
              <Col lg="16" md="6">
                <div className="topContent">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                </div>

                <Clock />

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shopBtn storeBtn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>

              <Col lg="16" md="6" className="text-end">
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="newArrivals">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section-title">New Arrivals</h2>
              </Col>

              <ProductsList productsList={mobileProducts} />
              <ProductsList productsList={wirelessProducts} />
            </Row>
          </Container>
        </section>

        <section className="popular">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section-title">Popular in Category</h2>
              </Col>

              <ProductsList productsList={popularProducts} />
            </Row>
          </Container>
        </section>
      </div>
    </Helmet>
  );
};

export default Home;
