import { create } from 'zustand';
import type { useIsUserSignedup_interface } from '@/interfaces';

const useIsUserSignedup = create<useIsUserSignedup_interface>((set) => ({
    isUserSignedup: false,
    setIsUserSignedup: (isUserSignedup) => set({ isUserSignedup }),

    userRegistrationData: {
        email: '',
        password: '',
        role: '',
    },
    setUserRegistrationData: (userRegistrationData) => set({ userRegistrationData })
}));

export default useIsUserSignedup;