// Main container for the signup page
export const authContainerStyle = `
flex 
flex-row 
container-fluid 
m-0 
p-0
`;

// Left Section: (contains the signup form)
export const formContainerStyle = `
flex 
flex-col 
lg:w-1/2 
w-2/2 
h-screen 
justify-center 
items-center
`;

// Sub-divider
export const subDividerStyle = `
bg-white 
shadow-xl 
rounded-lg 
pt-4 
pb-8 
px-8 
w-full 
max-w-md 
border-2 
border-[#6E39CB]
`;

// Title and Subtitle container
export const titleSubtitleContainerStyle = `
mx-auto 
w-full 
text-center 
my-8
`;

// Title
export const titleStyle = `
text-3xl 
font-bold 
mb-4
`;

// Subtitle
export const subtitleStyle = `
text-gray-600 
font-semibold 
mb-6
`;

// Signup form container
export const signupFormContainerStyle = `
w-full 
flex 
flex-col 
items-center 
space-y-3
`;

// Email Input container
export const emailInputContainerStyle = `
flex 
items-center 
shadow-sm 
border-[1px] 
rounded-sm 
w-[300px] 
p-1 
bg-gray-100
`;

// Email Input
export const emailInputStyle = `
focus:outline-none 
focus:ring-0 
focus:right-offset-0 
focus-visible:ring-0 
focus-visible:ring-offset-0 
border-none 
shadow-none
`;

// Password Input container
export const passwordInputContainerStyle = `
flex 
items-center 
shadow-sm 
border-[1px] rounded-sm 
w-[300px] 
p-1 
bg-gray-100
`;

// Password Input
export const passwordInputStyle = `
focus:outline-none 
focus:ring-0 
focus:right-offset-0 
focus-visible:ring-0 
focus-visible:ring-offset-0 
border-none 
rounded-none 
shadow-none
`;

// Role Input container
export const roleInputContainerStyle = `
flex 
items-center 
shadow-sm 
border-[1px] 
rounded-sm 
w-[300px] 
p-1 
bg-gray-100
`;

// Role Input Trigger
export const roleInputTriggerStyle = `
w-full 
focus:outline-none 
focus:ring-0 
focus:right-offset-0 
focus-visible:ring-0 
focus-visible:ring-offset-0 
border-none 
rounded-none 
shadow-none 
p-1
`;

// Submit Button
export const submitButtonStyle = `
bg-[#6E39CB] 
text-white 
font-semibold 
my-4 
py-2 px-10 
rounded 
cursor-pointer
`;

// Loading spinner 
export const loadingSpinnerStyle = `
flex 
flex-row 
items-center 
justify-center 
space-x-3
`;


// Right Section: (contains the background-img cover)
export const imgCoverSectionStyle = `
lg:flex 
flex-col 
lg:w-1/2 
hidden 
h-screen 
bg-cover 
bg-center
`;