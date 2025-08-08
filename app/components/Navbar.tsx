"use client";
import { MenuItems } from "@/constants/constants";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useCartStore } from "@/context/CartStore";
import { useState } from "react";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const { items } = useCartStore();
  const totalItems = items.reduce(
    (acc, item) => acc + (item?.quantity ?? 0),
    0
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-around h-[153px] dark:bg-dark-gray px-10 xl:px-5">
      <div className="flex items-center justify-around sm:justify-between w-full sm:w-auto px-5 sm:px-0">
        <h1 className="sm:text-4xl text-2xl text-main flex-1 text-center sm:text-left">
          iPhone <br className="xl:hidden" /> Resistencia.
        </h1>
        <button
          className="sm:hidden w-8 h-8 flex flex-col justify-center items-center gap-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="w-6 h-0.5 bg-dark-gray dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-dark-gray dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-dark-gray dark:bg-white"></span>
        </button>
      </div>
      <div className="w-full">
        <ul
          className={`${showMenu ? "flex" : "hidden"} sm:flex gap-2 flex-1 justify-center font-semibold text-lg text-dark-gray flex-col sm:flex-row absolute sm:relative top-[140px] sm:top-0 left-0 w-full xl:w-auto bg-white sm:bg-transparent dark:bg-dark-gray z-10 p-4 sm:p-0`}
        >
          {MenuItems.map((item, i) => (
            <div key={i} onClick={() => setShowMenu(false)}>
              <MenuItem item={item} />
            </div>
          ))}
          <li className="sm:hidden flex gap-2 justify-center mt-4">
            <Link href="#" onClick={() => setShowMenu(false)}>
              <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
                <Image
                  src="/icons/profile.png"
                  alt="carga productos"
                  width={12}
                  height={12}
                />
              </button>
            </Link>
            <Link href="/cart" onClick={() => setShowMenu(false)}>
              <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent relative">
                <Image
                  src="/icons/cart.png"
                  alt="carrito"
                  width={12}
                  height={12}
                />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            <button
              className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent"
              onClick={() => {
                setShowSearch(true);
                setShowMenu(false);
              }}
            >
              <Image
                src="/icons/search.png"
                alt="busqueda"
                width={12}
                height={12}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex flex-1 xl:justify-center justify-end gap-2">
        <div className="relative">
          <button
            className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Image
              src="/icons/profile.png"
              alt="carga productos"
              width={12}
              height={12}
            />
          </button>
          {showProfileMenu && (
            <div className="absolute top-12 right-0 bg-white border border-baccent rounded shadow-lg py-2 min-w-[200px] z-20">
              <Link href="/studio" onClick={() => setShowProfileMenu(false)}>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Carga de productos
                </div>
              </Link>
              <Link
                href="/product-list?favorites=true"
                onClick={() => setShowProfileMenu(false)}
              >
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Ver favoritos
                </div>
              </Link>
            </div>
          )}
        </div>
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
        <button
          className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent"
          onClick={() => setShowSearch(true)}
        >
          <Image
            src="/icons/search.png"
            alt="busqueda"
            width={12}
            height={12}
          />
        </button>
      </div>
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />
      {showProfileMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowProfileMenu(false)}
        />
      )}
    </div>
  );
};
export default Navbar;
