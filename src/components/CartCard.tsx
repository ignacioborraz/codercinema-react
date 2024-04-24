import { useRef } from "react";
import Product from "../interfaces/Product";
import ProductProp from "../interfaces/ProductProp";

export default function CartCard(props: ProductProp) {
  const { product } = props;
  const { id, title, price, colors, images, description, units } = product;
  const unitsToBuy = useRef();
  const manageUnits = () => {
    const productsOnCart = localStorage.getItem("cart");
    let products = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }
    const one = products?.find((each: Product) => each.id === product.id);
    if (one) {
      one.units = Number(unitsToBuy.current.value);
      localStorage.setItem("cart", JSON.stringify(products));
    }
  };
  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      <img
        className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
        src={images[0]}
        alt={title}
      />
      <div className="flex flex-col justify-start flex-grow">
        <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
          <span>
            <strong className="block lg:inline-block text-[16px]">
              {title}
            </strong>
            <span className="block lg:inline-block text-[12px]">
              - {colors[0]}
            </span>
          </span>
          <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
            {description}
          </p>
          <input
            className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            defaultValue={units}
            ref={unitsToBuy}
            onChange={manageUnits}
            min="1"
            id={id}
          />
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          AR$ ${price}
        </strong>
      </div>
    </article>
  );
}
