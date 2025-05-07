import { useState } from "react";

// UI COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ThreeCircles } from 'react-loader-spinner';

// ICONS
import { RiUser3Line } from "react-icons/ri";
import { MdOutlineLock } from "react-icons/md";
import { RiUserReceived2Line } from "react-icons/ri";

// GLOBAL STORES
import { useIsUserSignedup } from "@/stores";

// EXTERNAL STYLES
import {
    formContainerStyle,
    subDividerStyle,
    titleSubtitleContainerStyle,
    titleStyle,
    subtitleStyle,
    signupFormContainerStyle,
    emailInputContainerStyle,
    emailInputStyle,
    passwordInputContainerStyle,
    passwordInputStyle,
    roleInputContainerStyle,
    roleInputTriggerStyle,
    submitButtonStyle,
    loadingSpinnerStyle
} from "@/styles/auth/styles.js";

export default function SignupForm() {

    // Collect the form data from the inputs, and store them in its global store
    const { setIsUserSignedup, setUserRegistrationData, userRegistrationData } = useIsUserSignedup();

    // Loading state for the signup button
    const [loadingSignup, setLoadingSignup] = useState(false);

    // Handle the signup button click event
    const handleSignup = (e) => {
        e.preventDefault();
        setLoadingSignup(true);
        setTimeout(() => { // Simulate a network request
            setIsUserSignedup(true); // Set the user signup state to true
        }, 3000)
    }


    return (
        // Left Section: (contains the signup form)
        <div className={formContainerStyle}>

            {/* Sub-divider */}
            <div className={subDividerStyle}>

                {/* Title and Subtitle */}
                <div className={titleSubtitleContainerStyle}>
                    <h1 className={titleStyle}>Sign Up</h1>
                    <p className={subtitleStyle}>Sign up to get started</p>
                </div>

                {/* Signup form */}
                <form onSubmit={handleSignup} className={signupFormContainerStyle}>

                    {/* Email Input */}
                    <div className={emailInputContainerStyle}>
                        <Label htmlFor="email" className="ml-3 mr-3"><RiUser3Line size="18" /></Label>
                        <Input disabled={loadingSignup} onChange={(e) => setUserRegistrationData({ ...userRegistrationData, email: e.target.value })} type="email" id="email" placeholder="Email" className={emailInputStyle} required />
                    </div>

                    {/* Password Input */}
                    <div className={passwordInputContainerStyle}>
                        <Label htmlFor="password" className="ml-3 mr-3"><MdOutlineLock size="18" /></Label>
                        <Input disabled={loadingSignup} onChange={(e) => setUserRegistrationData({ ...userRegistrationData, password: e.target.value })} type="password" id="password" placeholder="Password" className={passwordInputStyle} required />
                    </div>

                    {/* Role Input */}
                    <div className={roleInputContainerStyle}>
                        <Label htmlFor="role" className="ml-3 mr-5"><RiUserReceived2Line size="18" /></Label>
                        <Select disabled={loadingSignup} onValueChange={(value) => setUserRegistrationData({ ...userRegistrationData, role: value })}>
                            <SelectTrigger id="role" className={roleInputTriggerStyle}>
                                <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="cust-supp">Customer support</SelectItem>
                                <SelectItem value="js-deve">Javascript developer</SelectItem>
                                <SelectItem value="oper-mana">Operations manager</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        type="submit"
                        disabled={loadingSignup || userRegistrationData.email == '' || userRegistrationData.password == '' || userRegistrationData.role == ''}
                        className={submitButtonStyle}>
                        {loadingSignup ? (
                            // Loading spinner
                            <div className={loadingSpinnerStyle}>
                                <span>Please wait</span>
                                <ThreeCircles visible={true} color="white" ariaLabel="tail-spin-loading" />
                            </div>
                        ) : 'Sign up'}
                    </Button>
                </form>
            </div>

        </div>
    )
}
