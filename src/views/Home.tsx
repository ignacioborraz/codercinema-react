import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import products from "../assets/products";
import Product from "../interfaces/product";

function Home() {
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
            <ProductCard key={each.id} product={each} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
