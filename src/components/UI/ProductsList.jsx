import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ productsList }) => {
  return (
    <>
      {productsList.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};

export default ProductsList;
