import styles from "./CartProduct.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteCartProduct, editCartProduct } from "../../../DB/dbCart";

const CartProduct = ({ product, deleteProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setQuantity(product.quantity);
  }, []);

  useEffect(() => {
    setTotal(parseInt(product.price) * parseInt(quantity));
    editCartProduct({ ...product, quantity: quantity });
  }, [quantity]);

  const addQuantity = () => {
    setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
  };
  const minQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => parseInt(prevQuantity) - 1);
    }
  };

  const removeProduct = () => {
    // remove product from cart
    deleteCartProduct(product.id).then(() => {
      deleteProduct();
    });
  };

  return (
    <div className={styles.card}>
      <img
        src={`./assets/products/${product.image}`}
        alt={product.image}
        className={styles.img}
      />
      <div className={styles.content}>
        <div className={styles.h1}>{product.name}</div>
        <div>
          ${product.price} x {quantity} &nbsp; &nbsp;
          <span className={styles.total}>${total}</span>
        </div>
        <div className={styles.quantity}>
          <div className={styles.quantityContent} onClick={minQuantity}>
            <RemoveIcon />
          </div>
          <div>{quantity}</div>
          <div className={styles.quantityContent} onClick={addQuantity}>
            <AddIcon />
          </div>
        </div>
      </div>
      <IconButton
        color="secondary"
        className={styles.delete}
        onClick={removeProduct}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default CartProduct;
