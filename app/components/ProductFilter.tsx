"use client";
import { useState, useEffect } from "react";
import { SelectFilter } from "./SelectFilter";

type Props = {
  onFilterChange: (filters: Filters) => void;
  showFavorites?: boolean;
};

export type Filters = {
  color?: string;
  model?: string;
  battery?: ">90" | "<90";
  favorites?: boolean;
};

export default function ProductFilter({
  onFilterChange,
  showFavorites,
}: Props) {
  const [filters, setFilters] = useState<Filters>({
    favorites: showFavorites
  });

  useEffect(() => {
    setFilters(prev => ({ ...prev, favorites: showFavorites }));
  }, [showFavorites]);

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  }

  return (
    <div className="grid w-full p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-md">
      <h2 className="sm:text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
        Filtros
      </h2>
      <div className="flex sm:grid sm:grid-rows-3 gap-5">
        <SelectFilter
          title="Color"
          options={["Negro", "Blanco", "Rojo", "Coral"]}
          value={filters.color}
          onChange={(v) => updateFilter("color", v)}
        />
        <SelectFilter
          title="Modelo"
          options={["iPhone 15 Pro", "iPhone 14 Pro Max", "iPhone 12"]}
          value={filters.model}
          onChange={(v) => updateFilter("model", v)}
        />
        <SelectFilter
          title="Batería"
          options={[">90", "<90"]}
          value={filters.battery}
          onChange={(v) => updateFilter("battery", v as ">90" | "<90")}
        />
        <div className="flex gap-3 items-center mt-5">
          <label htmlFor="favorites">Ver solo favoritos</label>
          <input
            id="favorites"
            type="checkbox"
            className="toggle toggle-sm"
            onChange={(e) => updateFilter("favorites", e.target.checked)}
            checked={filters.favorites || false}
          />
        </div>
      </div>
    </div>
  );
}
