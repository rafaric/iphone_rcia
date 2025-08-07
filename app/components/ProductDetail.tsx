"use client";
import { useCartStore } from "@/context/CartStore";
import { ProductDetailProps } from "@/utils/interface";
import Image from "next/image";
import { toast, Toaster } from "sonner";
export default function ProductDetail({
  image,
  name,
  price,
  batteryHealth,
  condition,
  model,
  color,
  storage,
  inStock,
}: ProductDetailProps) {
  const { addItem } = useCartStore();
  const handleAddToCart = () => {
    addItem({
      name,
      price,
      color,
      image,
      model,
      storage,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
    });
    toast.success("Producto añadido al carrito 🛒");
    //agregar modal o aviso con posibilidad de enviar al carrito.
  };
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-40 py-6">
      <Toaster />
      {/* 📷 Imagen del producto */}
      <div className="w-full">
        <Image
          src={image || ""}
          alt={name}
          className="rounded-xl shadow-md object-cover w-full h-auto"
          width={400}
          height={400}
        />
      </div>

      {/* 🧾 Info del producto */}
      <div className="flex flex-col justify-between space-y-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl xl:text-4xl font-bold">{name}</h2>
          <p className="text-gray-600 text-sm md:text-base 2xl:text-lg mt-4 md:mt-10">
            {model} • {color} • {storage}
          </p>
          {batteryHealth && (
            <p className="text-sm md:text-sm 2xl:text-lg text-green-600">
              🔋 Batería: {batteryHealth}%
            </p>
          )}
          {condition && (
            <p className="text-sm md:text-sm 2xl:text-base">
              📦 Estado: {condition}
            </p>
          )}
          <p className="text-xl md:text-lg 2xl:text-4xl font-semibold mt-2">
            ${price}
          </p>
          {!inStock && <p className="text-red-500 text-sm">Sin stock</p>}
        </div>

        <button
          className="bg-main text-white py-3 md:py-2 px-4 rounded hover:bg-main/80 transition disabled:bg-gray-400 text-base md:text-sm"
          disabled={inStock}
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
