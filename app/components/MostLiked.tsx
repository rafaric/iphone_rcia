import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const MostLiked = () => {
  return (
    <div className="w-full my-10">
      <h3 className="font-bold text-4xl text-dark-gray text-center">
        Productos más vistos
      </h3>
      <div className="grid grid-cols-5 gap-2 lg:gap-8 my-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card
            key={i}
            className="rounded bg-white gap-4 p-2 2xl:p-3 flex flex-col h-fit hover:shadow-xl hover:transition-all hover:duration-300 duration-200 hover:cursor-pointer group"
          >
            <div className="rounded bg-main w-full flex justify-center items-center p-2">
              <Image
                className="group-hover:scale-105 group-hover:transition-all group-hover:duration-300 duration-200"
                src="/productos/i13pink.png"
                alt={`producto${i}`}
                width={100}
                height={25}
              />
            </div>
            <h3 className="text-sm text-[#3e3e3e]">Iphone 13 PRO</h3>
            <div className="flex justify-between">
              <h4 className="text-sm font-bold text-[#3e3e3e]">U$S 550</h4>
              <button className="bg-main rounded w-6 h-6 flex justify-center items-center hover:bg-main/60">
                <Image
                  src="/icons/cartCard.png"
                  alt="cart"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MostLiked;
