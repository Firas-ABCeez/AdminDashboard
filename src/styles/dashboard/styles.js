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
h-[130px] 
p-4
z-10
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
pb-1
mt-5
`;

// FILTER 1: Role selector
export const roleFilterSelectorStyle = `
cursor-pointer
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
cursor-pointer
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
cursor-pointer
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
cursor-pointer
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

// Clear Filter Btn 
export const clearFilterBtn = `
flex 
flex-row 
justify-evenly 
items-center 
bg-gray-600
hover:bg-gray-800 
border-0 
cursor-pointer 
shadow-md
`;

// Add new admin dialog: Img section
export const addNewAdminImgSectionStyle = `
w-20 
h-20 
rounded-full 
bg-gray-100 
flex items-center 
justify-center 
relative
`;

// Add new admin dialog: Img
export const addNewAdminImgStyle = `
w-full h-full 
rounded-full 
object-cover
`;

// Add new admin dialog: Edit Icon
export const addNewAdminIconStyle = `
absolute 
bottom-0 
right-0 
bg-purple-600 
text-white 
w-5 
h-5 
rounded-full 
text-xs 
flex items-center 
justify-center 
cursor-pointer
`;

// Add new admin dialog: Img section > Title + subtitle
export const addNewAdminImgTitleStyle = `
text-sm 
text-black 
font-semibold
`;

export const addNewAdminImgSubtitleStyle = `
text-xs 
text-gray-700
`;

// Add new admin dialog: Inputs section
export const addNewAdminInputsSectionStyle = `
grid 
grid-cols-1 
md:grid-cols-2 
gap-4
`;

// Add new admin dialog: Inputs labels
export const addNewAdminInputsLabelsStyle = `
block 
mb-1 
text-sm 
text-black
`;

// Add new admin dialog: Inputs 
export const addNewAdminInputsStyle = `
border 
p-2 
rounded-lg 
w-full 
bg-gray-50 
text-black
`;

// Add new admin dialog: SelectTrigger 
export const addNewAdminSelectTriggerStyle = `
w-full 
bg-gray-50 
text-black
`;

// Add new admin dialog: Footer 
export const addNewAdminFooterStyle = `
flex 
justify-end 
gap-3 
mt-6
`;

// Add new admin dialog: Discard Trigger Btn  
export const addNewAdminDiscardTriggerBtnStyle = `
shadow-sm
border-[1px] 
border-gray-300 
text-sm 
px-5 
py-1.5 
bg-[#f4f5f9] 
hover:bg-gray-200 
text-gray-800 
rounded-sm 
font-semibold                          
cursor-pointer
`;

// Add new admin dialog: Content container  
export const addNewAdminContentContainerStyle = `
w-[300px] 
flex 
flex-col 
items-center
`;

// Add new admin dialog: Footer > Cancel Btn  
export const addNewAdminCancelBtnStyle = `
border-[1px] 
border-gray-300 
text-sm 
px-5 
py-1.5 
bg-[#f4f5f9] 
hover:bg-gray-200 
text-gray-800 
rounded-sm 
font-semibold                      
cursor-pointer
`;

// Add new admin dialog: Footer > Discard Btn  
export const addNewAdminDiscardBtnStyle = `
border-[1px] 
border-[#6e39cb] 
text-sm 
px-5 
py-1.5 
bg-[#6e39cb] 
hover:bg-[#9458ff] 
text-white 
rounded-sm 
font-semibold
cursor-pointer
`;

// Add new admin dialog: Footer > Save Btn  
export const addNewAdminSaveBtnStyle = `
shadow-md
border-[1px] 
border-[#6e39cb] 
text-sm 
px-5 
py-1.5 
bg-[#6e39cb] 
hover:bg-[#9458ff] 
text-white 
rounded-sm 
font-semibold
cursor-pointer
`;