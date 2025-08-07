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

export interface StripeProduct {
  _id: string;
  name: string;
  price: number;
  slug: { _type: "slug"; current: string };
  image: string;
  model: string;
  color: string;
  storage: string;
  views: number;
  batteryHealth: number;
  category?: {
    title: string;
    emoji: string;
  };
  condition?: {
    label: string;
    emoji: string;
  };
}

export interface ProductDetailProps {
  image: string;
  name: string;
  price: number;
  batteryHealth?: string;
  condition?: "nuevo" | "usado" | "reacondicionado";
  model: string;
  color: string;
  storage: string;
  inStock: boolean;
  description: string;
}
export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  model: string;
  storage: string;
  color: string;
  quantity?: number;
}

export interface CartItemProps {
  item: {
    slug: string;
    name: string;
    price: number;
    image: string;
    model: string;
    storage: string;
    color: string;
    quantity?: number;
  };
  onRemove: () => void;
}

export interface SearchState {
  query: string;
  setQuery: (q: string) => void;
  triggerRedirect: boolean;
  setTriggerRedirect: (val: boolean) => void;
}
