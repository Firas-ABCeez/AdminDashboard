// ICONS
import { GoHome } from "react-icons/go";
import { PiUsersLight } from "react-icons/pi";
import { GrPieChart } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";

// EXTERNAL STYLES
import {
  leftSectionStyle,
  logoStyle,
  navigationLinksStyle,
  sidebarButtonsListStyle,
  activeLinkStyle,
  inactiveLinkStyle,
  userCardStyle,
  userInfoContainerStyle,
  userProfilePictureStyle,
  userNameEmailContainerStyle,
  userNameStyle,
  userEmailStyle
} from "@/styles/dashboard/styles.js";

// GLOBAL STORES
import useIsUserSignedup from "@/stores/auth/useIsUserSignedup";

export default function Sidebar() {

  // Fetch the user data from the global store to be used in the dashboard's user card
  const { userRegistrationData } = useIsUserSignedup();

  return (
    // Left Section: (contains the sidebar navigator) 
    <div className={leftSectionStyle}>

      {/* Logo */}
      <div className={logoStyle} style={{ backgroundImage: "url('src/assets/images/logo.png')" }}></div>

      {/* Navigation Links */}
      <div className={navigationLinksStyle}>

        {/* Sidebar buttons list */}
        <ul className={sidebarButtonsListStyle}>
          <li className={inactiveLinkStyle}>
            <GoHome size={20} />
            <span>General</span>
          </li>
          <li className={activeLinkStyle}>
            <PiUsersLight size={20} />
            <span>Admins</span>
          </li>
          <li className={inactiveLinkStyle}>
            <GrPieChart size={20} />
            <span>Statistics</span>
          </li>
          <li className={inactiveLinkStyle}>
            <CiCreditCard1 size={20} />
            <span>Billing</span>
          </li>
        </ul>
      </div>

      {/* User card */}
      <div className={userCardStyle}>

        {/* Main user information container */}
        <div className={userInfoContainerStyle}>

          {/* USER: Profile Picture */}
          <div className={userProfilePictureStyle} style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5e335c197ce81d501c607a07/43a23995-70da-44ce-a4cb-a37df62aea6c/male-professional-headshot-tips-mens-corporate-headshots-guide.jpg')" }}></div>

          {/* USER: Name and Email container */}
          <div className={userNameEmailContainerStyle}>
            <h1 className={userNameStyle}>{userRegistrationData.name}</h1>
            <p className={userEmailStyle}>{userRegistrationData.email}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
