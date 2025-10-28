import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IFilterStore {
    filter: "all" | "completed" | "active",
    showFilters: boolean,
    setFilterValue: (filter: "all" | "completed" | "active") => void
    toggleFilters: () => void
}

const useFiltersStore = create<IFilterStore>()(
  immer(
    persist((set) => ({
        filter: 'all',
        showFilters: false,
        setFilterValue: (filter: "all" | "completed" | "active") => {
            set((s: IFilterStore) => {
                s.filter = filter
            })
        },
        toggleFilters: () => {
            set((s: IFilterStore) => {
                s.showFilters = !s.showFilters
            })
        }
    }), {name: "filters-storage"}))
);

export const useFilter = () => useFiltersStore((s: IFilterStore) => s.filter);
export const useShowFilters = () => useFiltersStore((s: IFilterStore) => s.showFilters);
export const setFilterValue = (filter: "all" | "completed" | "active") => useFiltersStore.getState().setFilterValue(filter);
export const toggleShowFilters = () => useFiltersStore.getState().toggleFilters();