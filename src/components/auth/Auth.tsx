import { useState } from "react";

// UI COMPONENTS
import { Button } from "../ui/button";
import { Input } from "../ui/input"
import { Label } from "../ui/label";
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

export default function Auth() {

    // Collect the form data from the inputs, and store them in its global store
    const { setIsUserSignedup, setUserRegistrationData, userRegistrationData } = useIsUserSignedup();

    // Loading state for the signup button
    const [loadingSignup, setLoadingSignup] = useState<boolean>(false);

    // Handle the signup button click event
    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setLoadingSignup(true);
        setTimeout(() => { // Simulate a network request
            setIsUserSignedup(true); // Set the user signup state to true
        }, 3000)
    }


    return (
        <div className="flex flex-row container-fluid m-0 p-0">

            {/* Left Section: (contains the login form)*/}
            <div className="flex flex-col lg:w-1/2 w-2/2 h-screen justify-center items-center">

                <div className="bg-white shadow-xl rounded-lg pt-4 pb-8 px-8 w-full max-w-md border-2 border-[#6E39CB]">

                    {/* Title and Subtitle */}
                    <div className="mx-auto w-full text-center my-8">
                        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
                        <p className="text-gray-600 font-semibold mb-6">Sign up to get started</p>
                    </div>

                    {/* Signup form */}
                    <form onSubmit={handleSignup} className="w-full flex flex-col items-center space-y-3">

                        {/* Email Input */}
                        <div className="flex items-center shadow-sm border-[1px] rounded-sm w-[300px] p-1 bg-gray-100">
                            <Label htmlFor="email" className="ml-3 mr-3"><RiUser3Line size="18" /></Label>
                            <Input disabled={loadingSignup} onChange={(e) => setUserRegistrationData({ ...userRegistrationData, email: e.target.value })} type="email" id="email" placeholder="Email" className="focus:outline-none focus:ring-0 focus:right-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none shadow-none" required />
                        </div>

                        {/* Password Input */}
                        <div className="flex items-center shadow-sm border-[1px] rounded-sm w-[300px] p-1 bg-gray-100">
                            <Label htmlFor="password" className="ml-3 mr-3"><MdOutlineLock size="18" /></Label>
                            <Input disabled={loadingSignup} onChange={(e) => setUserRegistrationData({ ...userRegistrationData, password: e.target.value })} type="password" id="password" placeholder="Password" className="focus:outline-none focus:ring-0 focus:right-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none rounded-none shadow-none" required />
                        </div>

                        {/* Role Input */}
                        <div className="flex items-center shadow-sm border-[1px] rounded-sm w-[300px] p-1 bg-gray-100">
                            <Label htmlFor="role" className="ml-3 mr-5"><RiUserReceived2Line size="18" /></Label>
                            <Select disabled={loadingSignup} onValueChange={(value) => setUserRegistrationData({ ...userRegistrationData, role: value })}>
                                <SelectTrigger id="role" className="w-full focus:outline-none focus:ring-0 focus:right-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none rounded-none shadow-none p-1">
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
                            className="bg-[#6E39CB] text-white font-semibold my-4 py-2 px-10 rounded cursor-pointer">
                            {loadingSignup ? (
                                <div className="flex flex-row items-center justify-center space-x-3">
                                <span>Please wait</span>
                                <ThreeCircles
                                    visible={true}
                                    color="white"
                                    ariaLabel="tail-spin-loading"
                                />
                                </div>
                            ) : 'Sign up'}
                        </Button>
                    </form>
                </div>

            </div>

            {/* Right Section: (contains the background-img cover) */}
            <div className="lg:flex flex-col lg:w-1/2 hidden h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/src/assets/images/auth-background.png")' }}>
            </div>

        </div>
    )
}
