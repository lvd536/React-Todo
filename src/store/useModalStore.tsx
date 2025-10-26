import { create } from 'zustand'

interface IModalStore {
    toggleModal(): void,
    setModalType(type: number): void,
    isModalOpen: boolean,
    modalType: number // 0 - creation, 1 - edit, 2 - details
}

export const useModalStore = create<IModalStore>((set) => ({
    isModalOpen: false,
    modalType: 0,
    toggleModal() {
        set((s) => ({ isModalOpen: !s.isModalOpen }))
    },
    setModalType(type: number) {
        set(() => ({
            modalType: type
        }))
    }
}))

export const useIsModalOpen = () => useModalStore((s) => s.isModalOpen)
export const useModalType = () => useModalStore((s) => s.modalType)
export const toggleModal = () => useModalStore.getState().toggleModal()
export const setModalType = (type: number) => useModalStore.getState().setModalType(type)