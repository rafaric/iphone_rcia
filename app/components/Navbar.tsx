import { MenuItems } from "@/constants/constants";
import Image from "next/image";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around h-[153px]">
      <h1 className="text-4xl text-main flex-1 text-center">
        iPhone Resistencia.
      </h1>
      <ul className="flex gap-2 flex-1 justify-center font-semibold text-lg text-dark-gray">
        {MenuItems.map((item, i) => (
          <MenuItem item={item} key={i} />
        ))}
      </ul>
      <div className="flex flex-1 justify-center gap-2">
        <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
          <Image
            src="/icons/profile.png"
            alt="carrito"
            width={12}
            height={12}
          />
        </button>
        <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
          <Image src="/icons/cart.png" alt="carrito" width={12} height={12} />
        </button>
        <button className="w-10 h-10 rounded bg-white border border-baccent flex items-center justify-center hover:scale-105 hover:transition-transform duration-200 hover:bg-accent">
          <Image src="/icons/search.png" alt="carrito" width={12} height={12} />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
