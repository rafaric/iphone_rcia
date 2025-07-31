import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCartStore } from "@/context/CartStore";
import { StripeProduct } from "@/utils/interface";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
interface ProductCardProps {
  item: StripeProduct;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const router = useRouter();
  const { addItem } = useCartStore();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addItem({
      name: item.name,
      price: item.price,
      color: item.color,
      image: item.image,
      model: item.model,
      storage: item.storage,
      slug: item.slug.current,
    });
    toast.success("Producto añadido al carrito 🛒");
    //router.push("/cart");
    //agregar modal o aviso con posibilidad de enviar al carrito.
  };
  return (
    <Card
      className="rounded bg-white gap-4 p-2 2xl:p-3 flex flex-col h-fit hover:shadow-xl hover:transition-all hover:duration-300 duration-200 hover:cursor-pointer group relative"
      onClick={() => router.push(`/products/${item.slug.current}`)}
    >
      <Badge className="absolute rounded-full size-8 top-4 left-4 bg-red-700">
        <span className="text-xs font-light">HOT</span>
      </Badge>
      <Badge className="absolute rounded-full size-8 top-4 right-4 bg-white hover:scale-105 hover:transition-all hover:duration-200">
        <Heart color="black" />
      </Badge>
      <div className="rounded bg-main w-full flex justify-center items-center p-2 h-40">
        <Image
          className="overflow-hidden group-hover:scale-105 group-hover:transition-all group-hover:duration-300 duration-200 bg-cover"
          src={item?.image}
          alt={item?.name}
          width={100}
          height={20}
        />
      </div>
      <h3 className="text-sm text-[#3e3e3e]">{item?.name}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-[#3e3e3e]">U$S {item?.price}</h4>
        <button
          className="bg-main rounded w-8 h-8 flex justify-center items-center hover:bg-main/60"
          onClick={handleAddToCart}
        >
          <Image src="/icons/cartCard.png" alt="cart" width={15} height={15} />
        </button>
      </div>
    </Card>
  );
};
export default ProductCard;
