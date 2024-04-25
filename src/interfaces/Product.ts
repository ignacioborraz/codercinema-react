export default interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  stock?: number;
  quantity?: number;
  units?: number;
  images: Array<string>;
  colors: Array<string>;
  onsale?: boolean
}

