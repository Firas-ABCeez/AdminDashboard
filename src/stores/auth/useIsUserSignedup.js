import { create } from 'zustand';

const useIsUserSignedup = create((set) => ({
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