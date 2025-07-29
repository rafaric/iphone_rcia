export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: Category;
  tags: Tag[];
  images: string[];
  stock: number;
  metadata: {
    year: number;
    sku: string;
  };
}

export type Category = "electronica" | "ropa" | "hogar";
export type Tag = "oferta" | "nuevo" | "mas-vendido";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}
