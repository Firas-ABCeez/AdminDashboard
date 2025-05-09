import { create } from 'zustand';

const useFilter = create((set) => ({
    role: "",
    setRole: (roleState) => set({ role: roleState }),

    status: "",
    setStatus: (statusState) => set({ status: statusState }),

    apply: false,
    setApply: (applyState) => set({ apply: applyState }),

    reset: false,
    setReset: (resetState) => set({ reset: resetState })
}));

export default useFilter;