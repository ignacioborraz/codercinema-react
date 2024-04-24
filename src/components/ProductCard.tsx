import Product from "../interfaces/ProductCard";
import { Link } from "react-router-dom";

export default function ProductCard(props: Product) {
  const { id, title, price, color, image } = props;
  return (
    <Link
      className="bg-[#f0f0f0] text-[#383838] rounded-md w-[250px] m-[15px] no-underline"
      to={"/details/" + id}
    >
      <img
        className="w-full h-[250px] object-cover object-center rounded-t-md"
        src={image}
        alt={title}
      />
      <div className="p-[20px]">
        <span className="text-[20px] font-bold leading-[25px] block">
          {title}
        </span>
        <span className="text-[12px] text-[#383838] mb-[5px]">{color}</span>
        <div className="flex my-[5px] justify-between items-center">
          <span className="text-[20px] font-bold text-[#428f13]">
            $ {price}
          </span>
          <span className="text-[12px]">50% Off</span>
        </div>
        <div className="text-[10px]">
          Includes Country tax and AFIP collection
        </div>
      </div>
    </Link>
  );
}
