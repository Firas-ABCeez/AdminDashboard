export interface useIsUserSignedup_interface {
    isUserSignedup: boolean;
    setIsUserSignedup: (isUserSignedup: boolean) => void;

    userRegistrationData: {
        email: string;
        password: string;
        role: string;
    };
    setUserRegistrationData: (userRegistrationData: {email: string, password: string, role: string}) => void;
}

