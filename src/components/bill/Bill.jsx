import React, { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../contexts/HeaderContext";
import ProductsList from "./productsList/ProductsList";
import Details from "../checkout/details/Details";
import { getCart } from "../../DB/dbCart";
import styles from "../checkout/Checkout/Checkout.module.css";
import QrCode from "../layout/QrCode/QrCode";
import Loading from "../layout/Loading";

const Bill = () => {
  const headerCtx = useContext(ActiveContext);

  useEffect(() => {
    headerCtx.changeHeader("Bill");
  }, [headerCtx]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className={styles.container}>
          <ProductsList products={products} />
          <div className={styles.details}>
            <Details products={products} />
            <QrCode url="http://localhost:3000/Checkout" />
          </div>
        </div>
      )}
      {products.length === 0 && <Loading />}
    </>
  );
};

export default Bill;
