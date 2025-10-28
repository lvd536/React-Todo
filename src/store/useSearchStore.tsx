import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ISearchStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const useSearchStore = create<ISearchStore>()(
    immer(persist((set) => ({
        searchValue: "",
        setSearchValue: (value: string) => {
            set((s: ISearchStore) => {
                s.searchValue = value;
            });
        },
    }), {name: 'search-store'}))
)

export const useSearchValue = () => useSearchStore((s: ISearchStore) => s.searchValue);
export const setSearchValue = (value: string) => useSearchStore.getState().setSearchValue(value);
