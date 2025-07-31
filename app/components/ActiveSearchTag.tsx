import { useSearchStore } from "@/context/SearchStore";

export default function ActiveSearchTag() {
  const { query, setQuery } = useSearchStore();
  if (!query) return null;
  return (
    <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200">
      <span className="text-zinc-700 dark:text-zinc-200">
        Buscando: <strong>{query}</strong>
      </span>
      <button
        onClick={() => setQuery("")}
        className="text-zinc-500 hover:text-red-500 transition"
        aria-label="Quitar búsqueda"
      >
        ✕
      </button>
    </div>
  );
}
