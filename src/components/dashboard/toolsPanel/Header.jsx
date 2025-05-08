import { useState } from "react";

// UI COMPONENTS
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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

// ICONS
import { IoPersonAddSharp } from "react-icons/io5";
import { RiUserReceived2Line } from "react-icons/ri";
import { SiStatuspal } from "react-icons/si";
import { FaFilter } from "react-icons/fa6";
import { MdOutlineFilterAltOff } from "react-icons/md";

// EXTERNAL STYLES
import {
    headerContainerStyle,
    firstRowContainerStyle,
    titleStyle,
    addNewAdminBtnStyle,
    secondRowContainerStyle,
    roleFilterSelectorStyle,
    roleFilterTriggerStyle,
    statusFilterSelectorStyle,
    statusFilterTriggerStyle,
    applyFilterBtn,
    clearFilterBtn,
    addNewAdminImgSectionStyle,
    addNewAdminImgStyle,
    addNewAdminIconStyle,
    addNewAdminImgTitleStyle,
    addNewAdminImgSubtitleStyle,
    addNewAdminInputsSectionStyle,
    addNewAdminInputsLabelsStyle,
    addNewAdminInputsStyle,
    addNewAdminSelectTriggerStyle,
    addNewAdminFooterStyle,
    addNewAdminDiscardTriggerBtnStyle,
    addNewAdminContentContainerStyle,
    addNewAdminCancelBtnStyle,
    addNewAdminDiscardBtnStyle,
    addNewAdminSaveBtnStyle
} from '@/styles/dashboard/styles.js'


export default function Header() {

    // Control "Add new admin" dialogs state
    const [openAddNewAdminDialog, setOpenAddNewAdminDialog] = useState(false);
    const [openDiscardAlertConfirmation, setOpenDiscardAlertConfirmation] = useState(false);

    // Temporary collect data from inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        phone: '',
        status: '',
        email: '',
    });

    return (
        // Header container
        <ScrollArea className={headerContainerStyle}>

            {/* First Row: (contains the Title, and Add New Admin btn ) */}
            <div className={firstRowContainerStyle}>

                {/* Title */}
                <h1 className={titleStyle}>Admins Panel</h1>

                {/* Add new admin - Btn */}
                <AlertDialog open={openAddNewAdminDialog}>
                    <AlertDialogTrigger>
                        <Button onClick={() => setOpenAddNewAdminDialog(true)} type="button" className={addNewAdminBtnStyle}>
                            <IoPersonAddSharp />
                            <span>Add new admin</span>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-center font-semibold">Add new admin</AlertDialogTitle>
                            <AlertDialogDescription>
                                <div className="flex items-center gap-4 mb-6">

                                    {/* Add new admin dialog: Img section */}
                                    <div className={addNewAdminImgSectionStyle}>

                                        {/* Add new admin dialog: Img */}
                                        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                                            alt="Profile" className={addNewAdminImgStyle} />

                                        {/* Add new admin dialog: Edit Icon */}
                                        <div className={addNewAdminIconStyle}>✎</div>
                                    </div>

                                    {/* Add new admin dialog: Img section > Title + Subtitle */}
                                    <div>
                                        <p className={addNewAdminImgTitleStyle}>Profile photo</p>
                                        <p className={addNewAdminImgSubtitleStyle}>This will be displayed on the admin profile.</p>
                                    </div>
                                </div>

                                {/* Add new admin dialog: Inputs section */}
                                <div className={addNewAdminInputsSectionStyle}>
                                    <div>
                                        <label className={addNewAdminInputsLabelsStyle}>First name</label>
                                        <input
                                            name="firstName"
                                            placeholder="First name"
                                            className={addNewAdminInputsStyle}
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className={addNewAdminInputsLabelsStyle}>Last name</label>
                                        <input
                                            name="lastName"
                                            placeholder="Last name"
                                            className={addNewAdminInputsStyle}
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className={addNewAdminInputsLabelsStyle}>Role</label>
                                        <Select>
                                            <SelectTrigger id="role" className={addNewAdminSelectTriggerStyle}>
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
                                        <label className={addNewAdminInputsLabelsStyle}>Phone number</label>
                                        <input
                                            name="phone"
                                            placeholder="12345678"
                                            className={addNewAdminInputsStyle}
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className={addNewAdminInputsLabelsStyle}>Status</label>
                                        <Select>
                                            <SelectTrigger id="role" className={addNewAdminSelectTriggerStyle}>
                                                <SelectValue placeholder="Select admin's status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className={addNewAdminInputsLabelsStyle}>Email address</label>
                                        <input
                                            name="email"
                                            placeholder="Email address"
                                            className={addNewAdminInputsStyle}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>

                            <div className={addNewAdminFooterStyle}>

                                {/* Discard Btn */}
                                <AlertDialog open={openDiscardAlertConfirmation}>

                                    <AlertDialogTrigger
                                        onClick={() => setOpenDiscardAlertConfirmation(true)}
                                        className={addNewAdminDiscardTriggerBtnStyle}>
                                        Discard
                                    </AlertDialogTrigger>

                                    <AlertDialogContent className={addNewAdminContentContainerStyle}>

                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-center">Discard unsaved changes?</AlertDialogTitle>
                                        </AlertDialogHeader>

                                        <AlertDialogFooter>

                                            <AlertDialogCancel
                                                onClick={() => setOpenDiscardAlertConfirmation(false)} className={addNewAdminCancelBtnStyle}>
                                                Cancel
                                            </AlertDialogCancel>

                                            <AlertDialogAction
                                                onClick={() => (
                                                    setOpenDiscardAlertConfirmation(false),
                                                    setOpenAddNewAdminDialog(false),
                                                    setFormData({
                                                        firstName: '',
                                                        lastName: '',
                                                        role: '',
                                                        phone: '',
                                                        status: '',
                                                        email: '',
                                                    })
                                                )}
                                                className={addNewAdminDiscardBtnStyle}>
                                                Discard
                                            </AlertDialogAction>

                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                                {/* Save Btn */}
                                <button
                                    onClick={() => (setOpenAddNewAdminDialog(false),
                                        setFormData({
                                            firstName: '',
                                            lastName: '',
                                            role: '',
                                            phone: '',
                                            status: '',
                                            email: '',
                                        }))}
                                    className={addNewAdminSaveBtnStyle}>
                                    Save
                                </button>
                            </div>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            {/* Second Row: (contains the filters) */}
            <div className={secondRowContainerStyle}>

                {/* FILTER 1: Role selector */}
                <div className={roleFilterSelectorStyle}>
                    <Label htmlFor="role" className="mx-3"><RiUserReceived2Line size="18" /></Label>
                    <Select>
                        <SelectTrigger id="role" className={roleFilterTriggerStyle}>
                            <SelectValue placeholder="Filter by Role" />
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

                {/* FILTER 2: Status selector */}
                <div className={statusFilterSelectorStyle}>
                    <Label htmlFor="status" className="mx-3"><SiStatuspal size="18" /></Label>
                    <Select>
                        <SelectTrigger id="status" className={statusFilterTriggerStyle}>
                            <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Apply Filter Btn */}
                <Button type="button" className={applyFilterBtn}>
                    <FaFilter />
                    <span>Apply filter</span>
                </Button>

                {/* Clear Filter Btn */}
                <Button type="button" className={clearFilterBtn}>
                    <MdOutlineFilterAltOff />
                    <span>Reset</span>
                </Button>
            </div>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
