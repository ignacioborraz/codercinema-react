import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Product from "../interfaces/Product";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get("/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavBar />
      <Hero first="renewed" second="technology" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div
          className="w-full lg:w-[1024px] flex flex-col sm:flex-row flex-wrap justify-between items-center"
          id="products"
        >
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
