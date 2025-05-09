import { useState, useEffect } from "react";

// UI COMPONENTS
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// EXTERNAL STYLES
import {
    headerContainerStyles,
    tableTheadStyles,
    tableTheadTrStyles,
    tableTbodyTrStyles,
    tableImgNameContainerStyles,
    tableTbodyTdImgStyles,
    tableTbodyTdStyles,
    tableTbodyDescContainerStyles,
    tableTbodyDescImgIconContainerStyles,
    tableTbodyDescImgStyles,
    tableTbodyDescImgEditIconStyles
} from '@/styles/dashboard/body/styles.js'

// API
import { database } from '@/api/data.js';

// ICONS
import { FaRegEdit } from "react-icons/fa";

// GLOBAL STORE
import useFilter from '@/stores/filter/useFilter.js';


export default function Body() {

    // Control "Profile Edit" dialogs state
    const [openProfileEditDialogID, setOpenProfileEditDialogID] = useState(null);
    const [openDiscardAlertConfirmation, setOpenDiscardAlertConfirmation] = useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = useState(null);

    // Track the updates made in profile inputs
    const [updateProfile, setUpdateProfile] = useState({
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        role: null,
        status: null
    })

    // Get the filters states from its global store
    const { status, role, apply, reset } = useFilter();

    // Store the initial version of the data
    const [data, setData] = useState(database);

    // Filter the data only when user clicks on 'apply filter'
    useEffect(() => {
        if (role || status) {
            const newFilteredData = database.filter(admin =>
                (!role || admin.role === role) &&
                (!status || admin.status === status)
            );
            setData(newFilteredData);
        } else {
            setData(database);
        }
    }, [apply]);

    // Reset the data when user clicks on Reset btn
    useEffect(() => {
        setData(database);
    }, [reset])

    return (
        // Header container
        <ScrollArea className={headerContainerStyles}>

            <table className="min-w-full">

                {/* Table: thead */}
                <thead className={tableTheadStyles}>

                    {/* Table: thead > tr > th */}
                    <tr>
                        <th className={tableTheadTrStyles}>Full Name</th>
                        <th className={tableTheadTrStyles}>Role</th>
                        <th className={tableTheadTrStyles}>ID</th>
                        <th className={tableTheadTrStyles}>Phone Number</th>
                        <th className={tableTheadTrStyles}>Status</th>
                        <th className={tableTheadTrStyles}>Created At</th>

                    </tr>
                </thead>

                <tbody>
                    {data?.length > 0 ? data.map((person, index) => (

                        // Table: tbody > tr
                        <tr key={index} className={tableTbodyTrStyles}>

                            {/* Table: tbody > td (contain Img + name) */}
                            <td className={tableImgNameContainerStyles}>

                                {/* Table: tbody > td > Img */}
                                <img
                                    src={person.profilePicture}
                                    alt={person.firstName}
                                    className={tableTbodyTdImgStyles}
                                />
                                <span>{person.firstName} {person.lastName}</span>
                            </td>

                            {/* Table: tbody > td */}
                            <td className={tableTbodyTdStyles}>
                                {
                                    person.role === "admin" && "Admin" ||
                                    person.role === "cust-supp" && "Customer support" ||
                                    person.role === "js-deve" && "Javascript developer" ||
                                    person.role === "oper-mana" && "Operation manager" ||
                                    person.role === "supr-admin" && "Super Admin"
                                }
                            </td>
                            <td className={tableTbodyTdStyles}>{person.id}</td>
                            <td className={tableTbodyTdStyles}>{person.phone}</td>
                            <td className={tableTbodyTdStyles}>

                                {/* Table: tbody > td (contain status) */}
                                <span className={`${person.status === 'active' ?
                                    'bg-green-500 rounded-full text-white font-semibold px-2 py-1 text-sm flex flex-col items-center justify-center capitalize w-fit' : 'bg-red-500 rounded-full text-white font-semibold px-2 py-1 text-sm flex flex-col items-center justify-center capitalize w-fit'}`}>
                                    {person.status}
                                </span>
                            </td>
                            <td className={tableTbodyTdStyles}>

                                {/* Table: tbody >  (contain status) */}
                                <div className="flex items-center justify-between gap-3">
                                    <span>{person.createdAt}</span>
                                    <AlertDialog open={openProfileEditDialogID === person.id}>
                                        <AlertDialogTrigger onClick={() => setOpenProfileEditDialogID(person.id)}>
                                            <FaRegEdit className="ml-3 cursor-pointer hover:shadow-sm" />
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="text-center font-semibold">
                                                    Edit Profile
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>

                                                    {/* Table: tbody >  description container */}
                                                    <div className={tableTbodyDescContainerStyles}>

                                                        {/* Table: tbody > description > Img + Edit Icon */}
                                                        <div className={tableTbodyDescImgIconContainerStyles}>

                                                            {/*  Table: tbody > description > Img */}
                                                            <img
                                                                src={person.profilePicture}
                                                                alt="Profile"
                                                                className={tableTbodyDescImgStyles}
                                                            />

                                                            {/*  Table: tbody > description > Img Edit Icon */}
                                                            <div className={tableTbodyDescImgEditIconStyles}>
                                                                ✎
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-black font-semibold">Profile photo</p>
                                                            <p className="text-xs text-gray-700">This will be displayed on the admin profile.</p>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">First name</label>
                                                            <input
                                                                name="firstName"
                                                                placeholder="First name"
                                                                className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                                                                value={updateProfile.firstName == null ? person.firstName : updateProfile.firstName}
                                                                onChange={(e) => setUpdateProfile({ ...updateProfile, firstName: e.target.value })}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">Last name</label>
                                                            <input
                                                                name="lastName"
                                                                placeholder="Last name"
                                                                className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                                                                value={updateProfile.lastName == null ? person.lastName : updateProfile.lastName}
                                                                onChange={(e) => setUpdateProfile({ ...updateProfile, lastName: e.target.value })}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">Role</label>
                                                            <Select
                                                                value={updateProfile.role == null ? person.role : updateProfile.role}
                                                                onValueChange={(value) => setUpdateProfile({ ...updateProfile, role: value })}
                                                            >
                                                                <SelectTrigger id="role" className="w-full bg-gray-50 text-black">
                                                                    <SelectValue placeholder="Select admin's role" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="supr-admin">Super Admin</SelectItem>
                                                                    <SelectItem value="admin">Admin</SelectItem>
                                                                    <SelectItem value="cust-supp">Customer support</SelectItem>
                                                                    <SelectItem value="js-deve">Javascript developer</SelectItem>
                                                                    <SelectItem value="oper-mana">Operations manager</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">Phone number</label>
                                                            <input
                                                                name="phone"
                                                                placeholder="123 45-678"
                                                                className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                                                                value={updateProfile.phone == null ? person.phone : updateProfile.phone}
                                                                onChange={(e) => setUpdateProfile({ ...updateProfile, phone: e.target.value })} />
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">Status</label>
                                                            <Select value={
                                                                updateProfile.status == null ?
                                                                    person.status === "active" && "active" ||
                                                                    person.status === "inactive" && "inactive" : updateProfile.status
                                                            }

                                                                onValueChange={(value) => setUpdateProfile({ ...updateProfile, status: value })}
                                                            >
                                                                <SelectTrigger id="role" className="w-full bg-gray-50 text-black">
                                                                    <SelectValue placeholder="Select admin's status" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="active">Active</SelectItem>
                                                                    <SelectItem value="inactive">Inactive</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 text-sm text-black">Email address</label>
                                                            <input
                                                                name="email"
                                                                placeholder="Email address"
                                                                className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                                                                value={updateProfile.email == null ? person.email : updateProfile.email}
                                                                onChange={(e) => setUpdateProfile({ ...updateProfile, email: e.target.value })} />
                                                        </div>
                                                    </div>

                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <div className="flex flex-row w-full items-center justify-between gap-3 mt-6">

                                                    {/* Delete Btn */}
                                                    <div>
                                                        <AlertDialog open={openDeleteAlert}>

                                                            <AlertDialogTrigger
                                                                onClick={() => setOpenDeleteAlert(person.id)}
                                                                className="shadow-sm border-[1px] border-red-300 text-sm px-5 py-1.5 bg-red-500 hover:bg-red-400 text-white rounded-sm font-semibold cursor-pointer">
                                                                Delete
                                                            </AlertDialogTrigger>

                                                            <AlertDialogContent className="w-[400px] flex flex-col items-center">
                                                                <AlertDialogHeader>

                                                                    <AlertDialogTitle className="text-center text-red-900">
                                                                        Sure you want a permanently deletion?
                                                                    </AlertDialogTitle>

                                                                    <AlertDialogDescription className="text-red-600 bg-red-100 border-2 border-red-200 text-center p-3 my-3 rounded-sm">
                                                                        This action cannot be undone. This will permanently delete <b>{person.firstName} {person.lastName} </b>
                                                                        account and remove their data from the servers.
                                                                    </AlertDialogDescription>

                                                                </AlertDialogHeader>

                                                                <AlertDialogFooter>

                                                                    <AlertDialogCancel
                                                                        onClick={() => setOpenDeleteAlert(false)}
                                                                        className="border-[1px] border-red-300 text-sm px-5 py-1.5 bg-red-500 hover:bg-red-400 text-white hover:text-white rounded-sm font-semibold cursor-pointer">
                                                                        Yes, Delete
                                                                    </AlertDialogCancel>

                                                                    <AlertDialogAction onClick={() => setOpenDeleteAlert(null)}
                                                                        className="border-[1px] border-[#6e39cb] text-sm px-20 py-1.5 bg-[#6e39cb] hover:bg-[#9458ff] text-white rounded-sm font-semibold cursor-pointer">
                                                                        No, Cancel
                                                                    </AlertDialogAction>

                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </div>

                                                    {/* Discard and Save Buttons */}
                                                    <div className="space-x-4">

                                                        {/* Discard Btn */}
                                                        <AlertDialog open={openDiscardAlertConfirmation}>
                                                            <AlertDialogTrigger
                                                                onClick={() => setOpenDiscardAlertConfirmation(true)}
                                                                className=" shadow-sm border-[1px] border-gray-300 text-sm px-5 py-1.5 bg-[#f4f5f9] hover:bg-gray-200 text-gray-800 rounded-sm font-semibold cursor-pointer">
                                                                Discard
                                                            </AlertDialogTrigger>

                                                            <AlertDialogContent className="w-[300px] flex flex-col items-center">
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle className="text-center">Discard unsaved changes?</AlertDialogTitle>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel onClick={() => setOpenDiscardAlertConfirmation(false)} className="
                                                                            border-[1px] border-gray-300 text-sm px-5 py-1.5 bg-[#f4f5f9] hover:bg-gray-200 text-gray-800 rounded-sm font-semibold
                                                                            cursor-pointer">Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction onClick={() => (setOpenDiscardAlertConfirmation(false), setOpenProfileEditDialogID(null), setUpdateProfile({
                                                                        firstName: null,
                                                                        lastName: null,
                                                                        email: null,
                                                                        phone: null,
                                                                        role: null,
                                                                        status: null
                                                                    }))}
                                                                        className="border-[1px] border-[#6e39cb] text-sm px-5 py-1.5 bg-[#6e39cb] hover:bg-[#9458ff] text-white rounded-sm font-semibold cursor-pointer">Discard</AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>

                                                        {/* Save Btn */}
                                                        <button
                                                            onClick={() => (setOpenProfileEditDialogID(null), setUpdateProfile({
                                                                firstName: null,
                                                                lastName: null,
                                                                email: null,
                                                                phone: null,
                                                                role: null,
                                                                status: null
                                                            }))}
                                                            className="shadow-md border-[1px] border-[#6e39cb] text-sm px-5 py-1.5 bg-[#6e39cb] hover:bg-[#9458ff] text-white rounded-sm font-semibold cursor-pointer">Save</button>
                                                    </div>

                                                </div>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </td>
                        </tr>
                    )) : (<div className="absolute w-full text-center">
                        <h1 className="mt-[14%] text-[35px] font-bold text-gray-400">
                            Oops! No data available
                        </h1>
                    </div>)}
                </tbody>
            </table>



            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
