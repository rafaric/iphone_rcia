"use client";

import { useCartStore } from "@/context/CartStore";
import Link from "next/link";
import CartItem from "../components/CartItem";
import { toast, Toaster } from "sonner";

const CartPage = () => {
  const { items, total, removeItem } = useCartStore();
  if (items.length === 0)
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Tu carrito está vacío 🛒</h2>
        <Link href="/product-list" className="text-blue-600 underline">
          Ver productos
        </Link>
      </div>
    );
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <Toaster />
      <h1 className="text-2xl font-bold">Carrito de compras</h1>

      {items.map((item) => (
        <CartItem
          key={item.slug}
          item={item}
          onRemove={() => {
            removeItem(item.slug);
            toast.success("Producto eliminado del carrito 😭.");
          }}
        />
      ))}

      <div className="text-right">
        <p className="text-lg font-medium">Total: ${total.toLocaleString()}</p>
        <Link href="/checkout">
          <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CartPage;
