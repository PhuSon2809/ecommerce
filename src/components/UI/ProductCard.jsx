import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="productItem">
        <div className="image">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={product.imgUrl}
            alt="product"
          />
        </div>
        <div className="p-2 infor">
          <h3 className="name">
            <Link to={`/shop/${product.id}`}>{product.productName}</Link>
          </h3>
          <span>{product.category}</span>
        </div>
        <div className="cart-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${product.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
