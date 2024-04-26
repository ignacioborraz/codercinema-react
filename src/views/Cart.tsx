import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";

function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      setProductsOnCart(JSON.parse(products));
      dispatch(calculateTotal({ products: JSON.parse(products) }));
    }
  }, []);
  return (
    <>
      <NavBar />
      <Hero first="my" second="cart" />
      <main className="w-full flex flex-col md:flex-row justify-center items-center md:items-start p-[20px]">
        <section className="flex flex-col">
          {productsOnCart.map((each: Product) => (
            <CartCard key={each.id} product={each} />
          ))}
        </section>
        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
