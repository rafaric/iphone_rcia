"use client";
import { useCartStore } from "@/context/CartStore";
import { ProductDetailProps } from "@/utils/interface";
import Image from "next/image";
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
    //agregar modal o aviso con posibilidad de enviar al carrito.
  };
  return (
    <div className="grid md:grid-cols-2 gap-8 px-40 py-6">
      {/* 📷 Imagen del producto */}
      <div className="w-full ">
        <Image
          src={image || ""}
          alt={name}
          className="rounded-xl shadow-md object-cover flex justify-center items-center"
          width={400}
          height={100}
        />
      </div>

      {/* 🧾 Info del producto */}
      <div className="flex flex-col justify-between space-y-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl xl:text-4xl font-bold">{name}</h2>
          <p className="text-gray-600 2xl:text-lg mt-10">
            {model} • {color} • {storage}
          </p>
          {batteryHealth && (
            <p className="text-sm 2xl:text-lg text-green-600">
              🔋 Batería: {batteryHealth}%
            </p>
          )}
          {condition && (
            <p className="text-sm 2xl:text-base">📦 Estado: {condition}</p>
          )}
          <p className="text-lg 2xl:text-4xl font-semibold mt-2">${price}</p>
          {!inStock && <p className="text-red-500 text-sm">Sin stock</p>}
        </div>

        <button
          className="bg-main text-white py-2 px-4 rounded hover:bg-main/80 transition disabled:bg-gray-400"
          disabled={inStock}
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
