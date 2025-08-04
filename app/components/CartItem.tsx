"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/context/CartStore";
import { CartItemProps } from "@/utils/interface";
import Image from "next/image";
import { toast, Toaster } from "sonner";

export default function CartItem({ item, onRemove }: CartItemProps) {
  const { addItem, decreaseItem } = useCartStore();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addItem({
      name: item.name,
      price: item.price,
      color: item.color,
      image: item.image,
      model: item.model,
      storage: item.storage,
      slug: item.slug,
    });
  };
  const handleDecreaseItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    decreaseItem(item.slug);
    toast.success("Producto retirado del carrito. 😢");
  };
  return (
    <div className="flex flex-col gap-4 border-b pb-4">
      <Toaster />
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md"
          width={100}
          height={100}
        />
        <div className="flex-grow">
          <p className="font-semibold">
            {item.model} ({item.storage})
          </p>
          <p className="text-sm text-gray-500">{item.color}</p>
          <p className="text-sm mt-1">U$S {item.price}</p>
        </div>
        <div className="flex gap-5 items-center border border-main pl-4 pr-1 py-1 bg-main/40 shadow-md rounded-xl">
          <p className="text-sm 2xl:text-base mt-1">{item.quantity}</p>
          <div className="flex gap-1 flex-col">
            <Button
              className="w-6 h-6 sm:size-3 active:brightness-75"
              onClick={handleAddToCart}
            >
              +
            </Button>
            <Button
              className="w-6 h-6 sm:size-3 active:brightness-75"
              onClick={handleDecreaseItem}
            >
              -
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 text-sm hover:underline hover:font-bold hover:cursor-pointer sm:hidden"
      >
        Quitar
      </button>
    </div>
  );
}
