import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Card className="rounded bg-white gap-4 p-2 2xl:p-3 flex flex-col h-fit hover:shadow-xl hover:transition-all hover:duration-300 duration-200 hover:cursor-pointer group relative">
      <Badge className="absolute rounded-full size-8 top-4 left-4 bg-red-700">
        <span className="text-xs font-light">50%</span>
      </Badge>
      <Badge className="absolute rounded-full size-8 top-4 right-4 bg-white hover:scale-105 hover:transition-all hover:duration-200">
        <Heart color="black" />
      </Badge>
      <div className="rounded bg-main w-full flex justify-center items-center p-2">
        <Image
          className="group-hover:scale-105 group-hover:transition-all group-hover:duration-300 duration-200"
          src="/productos/i13pink.png"
          alt={`producto`}
          width={100}
          height={25}
        />
      </div>
      <h3 className="text-sm text-[#3e3e3e]">Iphone 13 PRO</h3>
      <div className="flex justify-between">
        <h4 className="text-sm font-bold text-[#3e3e3e]">U$S 550</h4>
        <button className="bg-main rounded w-6 h-6 flex justify-center items-center hover:bg-main/60">
          <Image src="/icons/cartCard.png" alt="cart" width={15} height={15} />
        </button>
      </div>
    </Card>
  );
};
export default ProductCard;
