"use client";
import { fetchGroupedProducts } from "@/lib/utils";
import { StripeProduct } from "@/utils/interface";
import Image from "next/image";

import { useEffect, useState } from "react";

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
    <main className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Catálogo de iPhones</h1>

      {Object.entries(grouped).map(([conditionLabel, items]) => (
        <section key={conditionLabel}>
          <h2 className="text-xl font-semibold my-3">
            {items[0]?.condition?.emoji} {conditionLabel}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((product) => (
              <div key={product._id} className="border p-4 rounded shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                  width={50}
                  height={50}
                />
                <h3 className="font-bold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  {product.category?.emoji} {product.category?.title}
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
