"use client";
import { fetchGroupedProducts } from "@/lib/utils";
import { StripeProduct } from "@/utils/interface";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import { Toaster } from "sonner";
import BackToTop from "../components/BackToTop";
import ProductFilter, { Filters } from "../components/ProductFilter";
import { useSearchStore } from "@/context/SearchStore";
import ActiveSearchTag from "../components/ActiveSearchTag";

export default function Page() {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [fullView, setFullView] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({});
  const { query, triggerRedirect, setTriggerRedirect } = useSearchStore();

  useEffect(() => {
    if (triggerRedirect) {
      setTriggerRedirect(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerRedirect]);

  useEffect(() => {
    fetchGroupedProducts().then(setProducts);
  }, []);

  const filtered = products.filter((product) => {
    const matchColor = filters.color ? product.color === filters.color : true;
    const matchModel = filters.model ? product.model === filters.model : true;
    const matchBattery = filters.battery
      ? filters.battery === ">90"
        ? product.batteryHealth > 90
        : product.batteryHealth < 90
      : true;
    const matchQuery = product.model
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchColor && matchModel && matchBattery && matchQuery;
  });

  const handleToggle = () => {
    setFullView((prev) => !prev);
    console.log(fullView);
  };

  // Agrupar por condición
  const grouped = filtered.reduce(
    (acc, product) => {
      const key = product.condition?.label || "Sin Condición";
      if (!acc[key]) acc[key] = [];
      acc[key].push(product);
      return acc;
    },
    {} as Record<string, typeof products>
  );

  return (
    <main className="space-y-6 px-5 sm:px-20 2xl:px-40 mb-40">
      <Toaster />
      <h1 className="text-2xl font-bold">Catálogo de iPhones</h1>
      <section className="grid grid-cols-6 gap-10">
        <aside className="col-span-6 lg:col-span-1">
          <ProductFilter onFilterChange={setFilters} />
        </aside>
        <aside className="col-span-6 lg:col-span-5">
          <div className="flex flex-col sm:flex-row w-full gap-2 items-center">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="full"
                name="view"
                onClick={handleToggle}
              />
              <label className="text-sm sm:text-base" htmlFor="full">
                Sin Categorizar
              </label>
              <input
                type="radio"
                id="compact"
                name="view"
                onClick={handleToggle}
                defaultChecked
              />
              <label className="text-sm sm:text-base" htmlFor="compact">
                Por Condición
              </label>
              <ActiveSearchTag />
            </div>
            <span className="sm:ml-auto py-3 sm:py-0 text-sm text-gray-500">
              {filtered.length > 0
                ? `Se han encontrado ${filtered.length} productos`
                : "No se han encontrado productos con los filtros aplicados."}
            </span>
          </div>
          {!fullView ? (
            Object.entries(grouped).map(([conditionLabel, items]) => (
              <section key={conditionLabel} className="w-full mx-auto">
                <h2 className="text-xl font-semibold my-3">
                  {items[0]?.condition?.emoji} {conditionLabel}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
                  {items.map((product) => (
                    <ProductCard key={product._id} item={product} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <section>
              <h2 className="text-xl font-semibold my-3">
                Todos los Productos
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
                {filtered.map((product) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <ProductCard item={product} />
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </section>
      <BackToTop />
    </main>
  );
}
