"use client";
import { useEffect, useState } from "react";
import ProductCard from "./Card";
import { StripeProduct } from "@/utils/interface";
import { fetchGroupedProducts } from "@/lib/utils";

const MostLiked = () => {
  const [products, setProducts] = useState<StripeProduct[]>([]);

  useEffect(() => {
    fetchGroupedProducts().then(setProducts);
  }, []);
  return (
    <div className="w-full my-10">
      <h3 className="font-bold text-4xl text-dark-gray text-center">
        Productos más vistos
      </h3>
      <div className="grid grid-cols-5 gap-2 lg:gap-8 my-5">
        {products.map((product, i) => (
          <ProductCard key={i} item={product} />
        ))}
      </div>
    </div>
  );
};
export default MostLiked;
