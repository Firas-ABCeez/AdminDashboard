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

// ICONS
import { IoPersonAddSharp } from "react-icons/io5";
import { RiUserReceived2Line } from "react-icons/ri";
import { SiStatuspal } from "react-icons/si";
import { FaFilter } from "react-icons/fa6";

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
    applyFilterBtn
} from '@/styles/dashboard/styles.js'


export default function Header() {
    return (
        // Header container
        <ScrollArea className={headerContainerStyle}>

            {/* First Row: (contains the Title, and Add New Admin btn ) */}
            <div className={firstRowContainerStyle}>

                {/* Title */}
                <h1 className={titleStyle}>Admins Panel</h1>

                {/* Add new admin - Btn */}
                <Button type="button" className={addNewAdminBtnStyle}>
                    <IoPersonAddSharp />
                    <span>Add new admin</span>
                </Button>
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
            </div>

            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
