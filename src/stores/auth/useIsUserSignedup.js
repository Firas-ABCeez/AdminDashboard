import { create } from 'zustand';

const useIsUserSignedup = create((set) => ({
    isUserSignedup: false,
    setIsUserSignedup: (isUserSignedup) => set({ isUserSignedup }),

    userRegistrationData: {
        name: 'Kate Middleton',
        email: '',
        password: '',
        role: '',
    },
    setUserRegistrationData: (userRegistrationData) => set({ userRegistrationData })
}));

export default useIsUserSignedup;