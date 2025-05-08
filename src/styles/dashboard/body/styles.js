// Header container
export const headerContainerStyles = `
w-full 
z-5 
rounded-md 
bg-white 
shadow-md 
flex-1
overflow-auto
mt-4
`;

// Table: thead
export const tableTheadStyles = `
sticky 
bg-white 
shadow-sm 
top-0 
z-10
`;

// Table: thead > tr
export const tableTheadTrStyles = `
px-4 
py-3 
border-b 
border-gray-300 
text-left
`;

// Table: tbody > tr
export const tableTbodyTrStyles = `
even:bg-gray-100 
hover:bg-[#d8c1ff]
`;

// Table: tbody > td (contain Img + name)
export const tableImgNameContainerStyles = `
px-4 
py-2 
flex 
items-center 
gap-3
`;

// Table: tbody > td > Img
export const tableTbodyTdImgStyles = `
w-8 
h-8
rounded-full 
object-cover
`;

// Table: tbody > td
export const tableTbodyTdStyles = `
px-4 
py-2
`;

// Table: tbody >  description container
export const tableTbodyDescContainerStyles = `
flex 
items-center 
gap-4 
mb-6
`;

// Table: tbody > description > Img + Edit Icon container
export const tableTbodyDescImgIconContainerStyles = `
w-20 
h-20 
rounded-full 
bg-gray-100 
flex items-center 
justify-center
relative
`;

// Table: tbody > description > Img
export const tableTbodyDescImgStyles = `
w-full 
h-full 
rounded-full 
object-cover
`;

// Table: tbody > description > Img Edit Icon
export const tableTbodyDescImgEditIconStyles = `
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