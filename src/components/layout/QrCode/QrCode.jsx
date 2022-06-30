import styles from "./QrCode.module.css";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const QrCode = ({ url }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url).then((data) => setSrc(data));
  }, []);

  return (
    <div className={styles.card}>
      <img src={src} alt="cart" />
    </div>
  );
};

export default QrCode;
