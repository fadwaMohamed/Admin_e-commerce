import React, { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../../contexts/HeaderContext";
import Products from "../products/Products";
import Details from "../details/Details";
import styles from "./Checkout.module.css";
import { getCart } from "../../../DB/dbCart";
import QrCode from "../../layout/QrCode/QrCode";
import Loading from "../../layout/Loading";

const Checkout = () => {
  const headerCtx = useContext(ActiveContext);

  useEffect(() => {
    headerCtx.changeHeader("Checkout");
  }, [headerCtx]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.container}>
      {products.length > 0 && (
        <>
          <Products products={products} />
          <div className={styles.details}>
            <Details products={products} />
            <QrCode url="http://localhost:3000/Cart" />
          </div>
        </>
      )}
      {products.length === 0 && <Loading />}
    </div>
  );
};

export default Checkout;
