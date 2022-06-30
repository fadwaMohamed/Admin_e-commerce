import React from "react";
import Product from "./Product";
import Loading from "../../layout/Loading";

const Products = ({ products }) => {
  return (
    <div style={{ flex: "3" }}>
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      {products.length === 0 && <Loading margin="100px" />}
    </div>
  );
};

export default Products;
