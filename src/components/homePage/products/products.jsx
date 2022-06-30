import { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getProducts } from "../../../DB/dbProducts";
import { categContext } from "../../contexts/CategoryContext";
import Product from "./product";
import Loading from "./../../layout/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const categoryCtx = useContext(categContext);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    if (categoryCtx.category == "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category == categoryCtx.category)
      );
    }
  }, [categoryCtx.category]);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        style={{ marginTop: "20px" }}
      >
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => {
            return (
              <Grid item xs={4} sm={4} md={4} lg={3} key={product.id}>
                <Product product={product} />
              </Grid>
            );
          })}
      </Grid>
      {filteredProducts.length === 0 && <Loading margin="15" />}
    </>
  );
};

export default Products;
