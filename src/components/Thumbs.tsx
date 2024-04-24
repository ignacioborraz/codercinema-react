import { useEffect, useState } from "react";
import ProductProp from "../interfaces/ProductProp";

export default function Thumbs(props: ProductProp) {
  const { product } = props;
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
  useEffect(() => setThumb(product.images[0]), [product.id]);
  return (
    <section className="w-[340px] p-[10px] m-[10px] flex">
      <div className="w-[40px] mr-[10px]">
        {product.images.map((each) => (
          <img
            className="w-[40px] h-[30px] mb-[10px] object-cover"
            key={each}
            src={each}
            alt={product.title}
            onClick={() => setThumb(each)}
          />
        ))}
      </div>
      <img
        className="w-[280px] h-[280px] object-cover"
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}
