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
export interface StripeProduct {
  _id: string;
  name: string;
  price: number;
  slug: string;
  image: string;
  category?: {
    title: string;
    emoji: string;
  };
  condition?: {
    label: string;
    emoji: string;
  };
}
