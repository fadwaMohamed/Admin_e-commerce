import { useEffect, useState } from "react";
import styles from "./Details.module.css";

const Details = ({ products }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(
      products.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity * currentValue.price;
      }, 0)
    );
    console.log(products)
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>Subtotal:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
      <div className={styles.content}>
        <div>Tax:</div>
        <div>${(0.14 * subtotal).toFixed(2)}</div>
      </div>
      <div className={styles.content}>
        <div>Total:</div>
        <div className={styles.total}>
          ${(subtotal + 0.14 * subtotal).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Details;
