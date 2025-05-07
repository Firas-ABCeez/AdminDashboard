// EXTERNAL STYLES
import { dashboardContainerStyle } from "@/styles/dashboard/styles.js";

// UI COMPONENTS
import Sidebar from "./sidebar/Sidebar";
import ToolsPanel from "./toolsPanel/ToolsPanel";

export default function Dashboard() {

  return (
    // Main Dashboard Container
    <div className={dashboardContainerStyle}>

      {/* Left Section: (contains the sidebar navigator) */}
      <Sidebar />

      {/* Right Section: (contains admin control tools) */}
      <ToolsPanel />

    </div>
  )
}
