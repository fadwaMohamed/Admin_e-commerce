import React, { useContext, useEffect, useState } from "react";
import { ActiveContext } from "../../contexts/HeaderContext";
import { getCart } from "../../../DB/dbCart";
import CartProduct from "../cartProduct/CartProduct";
import { cartContext } from "../../contexts/CartCountContext";
import Loading from "../../layout/Loading";

const Cart = () => {
  const headerCtx = useContext(ActiveContext);

  useEffect(() => {
    headerCtx.changeHeader("Cart");
  }, [headerCtx]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCart().then((data) => setProducts(data));
  }, []);

  const cartCtx = useContext(cartContext);

  const deleteProduct = () => {
    getCart().then((data) => {
      setProducts(data);
      cartCtx.setCount(data.length);
    });
  };

  return (
    <>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <CartProduct
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          );
        })}
      {products.length === 0 && <Loading margin="100px" />}
    </>
  );
};

export default Cart;
