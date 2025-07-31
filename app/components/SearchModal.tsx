// components/SearchModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useSearchStore } from "@/context/SearchStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (query: string) => {
    const { setQuery, setTriggerRedirect } = useSearchStore.getState();
    setQuery(query);
    setTriggerRedirect(true);
    if (pathname !== "/product-list") {
      router.push("/product-list");
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSearch(query.trim());
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  z-50 flex justify-end mt-40 mr-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md max-w-md w-full h-fit"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full p-2 border rounded dark:bg-zinc-800"
                autoFocus
              />
              <div className="">
                {/* <button
                  type="button"
                  onClick={onClose}
                  className="text-sm hover:underline"
                >
                  Cancelar
                </button> */}
                <Button
                  type="submit"
                  className="bg-main text-white px-4 py-2 rounded hover:bg-accent-foreground"
                >
                  Buscar
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
