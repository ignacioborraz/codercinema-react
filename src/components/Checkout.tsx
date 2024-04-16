import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  let productsInStorage = [];
  !localStorage.getItem("cart")
    ? localStorage.setItem("cart", JSON.stringify([]))
    : (productsInStorage = JSON.parse(localStorage.getItem("cart")));
  useEffect(() => {
    const one = productsInStorage.find((each) => each.id === product.id);
    if (one) {
      setButton(true);
    } else {
      setButton(false);
    }
  });
  const manageCart = () => {
    const one = productsInStorage.find((each) => each.id === product.id);
    if (!one) {
      productsInStorage.push(product);
      setButton(true);
    } else {
      productsInStorage = productsInStorage.filter(
        (each) => each.id !== product.id
      );
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  };
  return (
    <section className={styles["product-checkout-block"]}>
      <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>
        <h2 id="price" className={styles["checkout-total-price"]}>
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className={styles["checkout-description"]}>
          Includes Country tax and AFIP collection
        </p>
        <ul className={styles["checkout-policy-list"]}>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/truck.png" alt="Truck" />
            </span>
            <span className={styles["policy-desc"]}></span>
          </li>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/plane.png" alt="Plane" />
            </span>
            <span className={styles["policy-desc"]}>
              Add the product to the cart to know the shipping costs
            </span>
          </li>
        </ul>
        <div className={styles["checkout-process"]}>
          <div className={styles["top"]}>
            <input
              type="number"
              min="1"
              defaultValue={quantity}
              onChange={(event) => setQuantity(Number(event?.target.value))}
            />
            <button
              type="button"
              className={button ? styles["remove-btn"] : styles["cart-btn"]}
              onClick={manageCart}
            >
              {button ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
