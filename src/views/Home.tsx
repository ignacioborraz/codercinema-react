import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Product from "../interfaces/Product";
import { useSelector } from "react-redux";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store) => store.products.text);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);
  console.log(text);

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
