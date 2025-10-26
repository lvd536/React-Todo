import { create } from 'zustand'

interface IModalStore {
    toggleModal(): void,
    isModalOpen: boolean
}

export const useModalStore = create<IModalStore>((set) => ({
    isModalOpen: false,
    toggleModal() {
        set((s) => ({ isModalOpen: !s.isModalOpen }))
    }
}))

export const useIsModalOpen = () => useModalStore((s) => s.isModalOpen)
export const toggleModal = () => useModalStore.getState().toggleModal()