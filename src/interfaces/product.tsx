interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  units?: number;
  quantity?: number;
  images: Array<string>;
  image?: string;
  colors: Array<string>;
  color?: string;
  onsale: boolean;
}

export default Product;
