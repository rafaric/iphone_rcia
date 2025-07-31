import { SearchState } from "@/utils/interface";
import { create } from "zustand";

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (q) => set({ query: q }),
  triggerRedirect: false,
  setTriggerRedirect: (val) => set({ triggerRedirect: val }),
}));
