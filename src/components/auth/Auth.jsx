// UI COMPONENTS
import ImgCoverSection from "./ImgCoverSection/ImgCoverSection";
import SignupForm from "./signupForm/SignupForm";

// EXTERNAL STYLES
import { authContainerStyle } from "@/styles/auth/styles.js";

export default function Auth() {

    return (
        // Main container for the signup page
        <div className={authContainerStyle}>

            {/* Left Section: (contains the signup form) */}
            <SignupForm />

            {/* Right Section: (contains the background-img cover) */}
            <ImgCoverSection />

        </div>
    )
}
