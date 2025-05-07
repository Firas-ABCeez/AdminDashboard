export const dashboardContainerStyle = `
flex 
flex-row 
container-fluid 
m-0 
p-0
`;

// Left Section: (contains the sidebar navigator)
export const leftSectionStyle = `
flex 
flex-col 
min-w-[250px] 
h-screen
border-r-[1px]
`;

// Logo
export const logoStyle = `
flex 
flex-row 
self-center 
w-[90px] 
h-[90px] 
bg-contain 
bg-no-repeat 
bg-center 
m-4
`;

// Navigation Links
export const navigationLinksStyle = `
flex 
flex-col 
self-center 
mt-4 
w-[80%]
`;

// Sidebar buttons list 
export const sidebarButtonsListStyle = `
flex 
flex-col 
space-y-4 
font-normal
`;

// Common style for the Active and Inactive links
export const activeLinkStyle = `
flex 
flex-row 
items-center 
space-x-4 
cursor-pointer 
bg-[#6E39CB] 
hover:bg-[#8260bc] 
text-white 
font-bold 
p-2 
rounded-md 
transition 
duration-150 
ease-in-out
shadow-md
`
    ;

export const inactiveLinkStyle = `
flex 
flex-row 
items-center 
space-x-4 
cursor-pointer 
hover:bg-[#8260bc] 
hover:text-white 
font-semibold 
p-2 
rounded-md 
transition 
duration-150 
ease-in-out`
    ;

// User card
export const userCardStyle = `
flex 
flex-row 
self-center 
items-center 
cursor-pointer 
bg-[#6E39CB] 
hover:bg-[#8260bc] 
text-white 
p-2 
rounded-md 
transition 
duration-150 
ease-in-out 
mt-auto 
mb-4 
w-[80%] 
shadow-sm
`;

// Main user information container
export const userInfoContainerStyle = `
flex 
flex-row 
items-center 
justify-evenly 
w-full 
space-x-2
`;

// USER: Profile Picture
export const userProfilePictureStyle = `
bg-cover 
bg-no-repeat 
bg-center 
p-5 
rounded-full
`;

// USER: Name and Email container
export const userNameEmailContainerStyle = `
flex 
flex-col 
overflow-hidden
`;

// USER: username
export const userNameStyle = `
text-sm 
font-semibold
`;

// USER: email
export const userEmailStyle = `
text-xs
`;

// Right Section: (contains admin control tools)
export const rightSectionStyle = `
flex 
flex-col 
w-full 
h-screen 
bg-gray-100
p-4
overflow-hidden
`;

// Header container
export const headerContainerStyle = `
w-full 
rounded-md 
bg-white 
shadow-sm 
h-[140px] 
p-4
`;

// First Row: (contains the Title, and Add New Admin btn )
export const firstRowContainerStyle = `
flex 
flex-row 
items-center 
justify-between 
space-x-100
`;

// Title
export const titleStyle = `
font-bold 
text-2xl 
text-[#6E39CB] 
min-w-[200px]
`;

// Add new admin - Btn
export const addNewAdminBtnStyle = `
flex 
flex-row 
justify-evenly 
items-center 
bg-[#3742fa] 
hover:bg-[#1e90ff] 
border-0 
cursor-pointer
`;

// Second Row: (contains the filters)
export const secondRowContainerStyle = `
flex 
flex-row 
items-center 
justify-start 
space-x-5 
mt-7
`;

// FILTER 1: Role selector
export const roleFilterSelectorStyle = `
flex 
items-center 
shadow-sm 
border-[1px] 
rounded-sm 
w-[250px] 
bg-white
`;

// FILTER 1: Role selector (SelectTrigger)
export const roleFilterTriggerStyle = `
focus:outline-none 
focus:ring-0 
focus:right-offset-0 
focus-visible:ring-0 
focus-visible:ring-offset-0 
border-none 
rounded-none 
shadow-none 
w-full
`;

// FILTER 2: Status selector 
export const statusFilterSelectorStyle = `
flex 
items-center 
shadow-sm 
border-[1px] 
rounded-sm 
w-[250px] 
bg-white
`;

// FILTER 2: Status selector (SelectTrigger)
export const statusFilterTriggerStyle = `
focus:outline-none 
focus:ring-0 
focus:right-offset-0 
focus-visible:ring-0 
focus-visible:ring-offset-0 
border-none 
rounded-none 
shadow-none 
w-full
`;

// Apply Filter Btn 
export const applyFilterBtn = `
flex 
flex-row 
justify-evenly 
items-center 
bg-[#1e90ff]
hover:bg-[#3742fa] 
border-0 cursor-pointer 
shadow-md
`;