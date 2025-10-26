import {create} from 'zustand'
import {persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface IThemeStore {
    theme: 'light' | 'dark',
    toggleTheme: () => void
}

const useThemeStore = create<IThemeStore>()(
    immer(persist((set) => ({
        theme: 'dark',
        toggleTheme: () => set((s: IThemeStore) => ({
        theme: s.theme === 'light' ? 'dark' : 'light'
    }))
    }), {name: 'themeStorage'}))
)

export const useTheme: () => string = () => useThemeStore((s: IThemeStore) => s.theme)
export const toggleTheme: () => void = () => useThemeStore.getState().toggleTheme()