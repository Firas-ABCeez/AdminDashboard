import { useState } from "react";

// UI COMPONENTS
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AddAdmin() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        phone: '',
        status: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center relative">
                    <img
                        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-purple-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center cursor-pointer">
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
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm text-black">Last name</label>
                    <input
                        name="lastName"
                        placeholder="Last name"
                        className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm text-black">Role</label>
                    <Select>
                        <SelectTrigger id="role" className="w-full bg-gray-50 text-black">
                            <SelectValue placeholder="Select admin's role"/>
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
                        placeholder="12345678"
                        className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm text-black">Status</label>
                    <Select>
                        <SelectTrigger id="role" className="w-full bg-gray-50 text-black">
                            <SelectValue placeholder="Select admin's status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="cust-supp">Customer support</SelectItem>
                            <SelectItem value="js-deve">Javascript developer</SelectItem>
                            <SelectItem value="oper-mana">Operations manager</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block mb-1 text-sm text-black">Email address</label>
                    <input
                        name="email"
                        placeholder="Email address"
                        className="border p-2 rounded-lg w-full bg-gray-50 text-black"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
                <button className="px-4 py-2 border rounded-lg text-gray-600">Discard</button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Save</button>
            </div>
        </>
    );
};
