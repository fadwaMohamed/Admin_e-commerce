import styles from "./Product.module.css";

const Product = ({ product }) => {
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
          ${product.price} x {product.quantity} &nbsp; &nbsp;
          <span className={styles.total}>
            ${parseInt(product.price) * parseInt(product.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
