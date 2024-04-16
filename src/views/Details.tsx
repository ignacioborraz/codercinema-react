import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import products from "../../public/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Details() {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  const onsale = products.filter((each) => each.onsale);
  return (
    <>
      <NavBar />
      {!product && <Hero first="NOT" second="found" />}
      <main>
        <div className={styles["details-container"]}>
          {product && (
            <div id="details" className={styles["columns-container"]}>
              <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                  {product.images.map((each) => (
                    <img
                      className={styles["mini-img"]}
                      src={each}
                      alt={product.title}
                    />
                  ))}
                </div>
                <img
                  className={styles["big-img"]}
                  id="big-img"
                  src={product.images[0]}
                  alt={product.title}
                />
              </section>
              <div className={styles["product-description-block"]}>
                <h1 className={styles["product-title"]}>{product.title}</h1>
                <form className={styles["product-selector"]}>
                  <fieldset className={styles["product-fieldset"]}>
                    <label className={styles["product-label"]} htmlFor="color">
                      Color
                    </label>
                    <select className={styles["product-select"]} id="color">
                      {product.colors.map((each) => (
                        <option key={each} value="Silver">
                          {each}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </form>
                <div className={styles["product-description"]}>
                  <span className={styles["product-label"]}>Descripción</span>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                  <span className={styles["checkout-total-label"]}>Total:</span>
                  <h2 id="price" className={styles["checkout-total-price"]}>
                    ${product.price}
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
                      <input type="number" min="1" defaultValue="1" />
                      <button type="button" className={styles["cart-btn"]}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Week Sale</h2>
            <div id="product-container" className={styles["product-container"]}>
              {onsale.map((each) => (
                <ProductCard
                  key={each.id}
                  id={each.id}
                  title={each.title}
                  price={each.price}
                  color={each.colors[0]}
                  image={each.images[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
