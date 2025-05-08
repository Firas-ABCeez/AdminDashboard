// EXTERNAL STYLES
import { rightSectionStyle } from "@/styles/dashboard/styles.js";

// UI COMPONENTS
import Header from "./Header";
import Body from "./Body";

export default function ToolsPanel() {

    return (
        // Right Section: (contains admin control tools)
        <div div className={rightSectionStyle} >

            {/* Header Section */}
            <Header />

            {/* Body Section */}
            <Body />
            
        </div >
    )
}
