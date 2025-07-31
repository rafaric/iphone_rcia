"use client";
import { MenuItems } from "@/constants/constants";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useCartStore } from "@/context/store";

const Navbar = () => {
  const { items } = useCartStore();
  const totalItems = items.reduce(
    (acc, item) => acc + (item?.quantity ?? 0),
    0
  );
  return (
    <div className="flex items-center justify-around h-[153px] dark:bg-dark-gray">
      <h1 className="text-4xl text-main flex-1 text-center">
        iPhone Resistencia.
      </h1>
      <ul className="flex gap-2 flex-1 justify-center font-semibold text-lg text-dark-gray">
        {MenuItems.map((item, i) => (
          <MenuItem item={item} key={i} />
        ))}
      </ul>
      <div className="flex flex-1 justify-center gap-2">
        <Link href="/studio">
          <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
            <Image
              src="/icons/profile.png"
              alt="carga productos"
              width={12}
              height={12}
            />
          </button>
        </Link>
        <Link href="/cart">
          <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent relative">
            <Image src="/icons/cart.png" alt="carrito" width={12} height={12} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </button>
        </Link>
        <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
          <Image
            src="/icons/search.png"
            alt="busqueda"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
