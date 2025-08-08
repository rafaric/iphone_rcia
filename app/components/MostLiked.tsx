"use client";
import { useEffect, useState } from "react";
import ProductCard from "./Card";
import { StripeProduct } from "@/utils/interface";
import { topViewedProducts } from "@/lib/utils";

const MostLiked = () => {
  const [products, setProducts] = useState<StripeProduct[]>([]);

  useEffect(() => {
    topViewedProducts().then(setProducts);
  }, []);

  return (
    <div className="w-full my-10">
      <h3 className="font-bold text-xl sm:text-4xl text-dark-gray text-center">
        Productos más vistos
      </h3>
      <div className="grid  grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-8 my-5 mx-2 sm:mx-0 just">
        {products.map((product, i) => (
          <div
            key={i}
            className={`${i === products.length - 1 && products.length % 2 === 1 ? "col-span-2 px-22 sm:px-0 sm:col-span-1 sm:justify-start" : ""} `}
          >
            <ProductCard item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MostLiked;
