"use client";
import { fetchGroupedProducts } from "@/lib/utils";
import { StripeProduct } from "@/utils/interface";

import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import { Toaster } from "sonner";

export default function Page() {
  const [products, setProducts] = useState<StripeProduct[]>([]);

  useEffect(() => {
    fetchGroupedProducts().then(setProducts);
  }, []);

  // Agrupar por condición
  const grouped = products.reduce(
    (acc, product) => {
      const key = product.condition?.label || "Sin Condición";
      if (!acc[key]) acc[key] = [];
      acc[key].push(product);
      return acc;
    },
    {} as Record<string, typeof products>
  );

  return (
    <main className="space-y-6 px-40 mb-40">
      <Toaster />
      <h1 className="text-2xl font-bold">Catálogo de iPhones</h1>

      {Object.entries(grouped).map(([conditionLabel, items]) => (
        <section key={conditionLabel}>
          <h2 className="text-xl font-semibold my-3">
            {items[0]?.condition?.emoji} {conditionLabel}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
            {items.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
{
  /* <div key={product._id} className="border p-4 rounded shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded"
                  width={120}
                  height={120}
                />
                <h3 className="font-bold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  {product.category?.emoji} {product.category?.title}
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  ${product.price}
                </p>
              </div> */
}
