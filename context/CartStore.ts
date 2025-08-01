import { create } from "zustand";
import { CartItem } from "../utils/interface";
import { persist } from "zustand/middleware";

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  decreaseItem: (slug: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      items: [] as CartItem[],
      total: 0,
      addItem: (item: CartItem) =>
        set((state) => {
          const exists = state.items.find((i) => i.slug === item.slug);
          let updated;
          if (exists) {
            updated = state.items.map((i) =>
              i.slug === item.slug
                ? { ...i, quantity: (i.quantity ?? 1) + 1 }
                : i
            );
          } else {
            updated = [...state.items, { ...item, quantity: 1 }];
          }
          return {
            items: updated,
            total: updated.reduce(
              (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
              0
            ),
          };
        }),
      removeItem: (slug: string) =>
        set((state) => {
          const updated = state.items.filter((i) => i.slug !== slug);
          return {
            items: updated,
            total: updated.reduce(
              (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
              0
            ),
          };
        }),
      decreaseItem: (slug: string) =>
        set((state) => {
          const updated = state.items
            .map((i) =>
              i.slug === slug ? { ...i, quantity: (i.quantity ?? 1) - 1 } : i
            )
            .filter((i) => (i.slug === slug ? (i.quantity ?? 1) > 0 : true));
          return {
            items: updated,
            total: updated.reduce(
              (acc, curr) => acc + curr.price * (curr.quantity ?? 1),
              0
            ),
          };
        }),
      clearCart: () => set(() => ({ items: [], total: 0 })),
    }),
    { name: "cart-store" }
  )
);
