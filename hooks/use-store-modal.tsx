import { create } from 'zustand'

interface IStoreModalHook {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useStoreModal = create<IStoreModalHook>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))