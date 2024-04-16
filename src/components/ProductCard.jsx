import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <a className={styles["product-card"]} href="./details.html">
      <img
        className={styles["product-img"]}
        src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
        alt="iPad Pro 12.9"
      />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>iPad Pro 12.9</span>
        <span className={styles["product-description"]}>Silver</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>900000</span>
          <span className={styles["product-discount"]}>50% Off</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
      {/* PEGAR LAS ETIQUETAS CORRESPONDIENTES */}
    </a>
  );
}
