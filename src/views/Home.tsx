import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
