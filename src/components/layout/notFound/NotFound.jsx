import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src="./assets/notFound.png" alt="404 error" className={styles.img} />
    </div>
  );
};

export default NotFound;
