import { BiErrorCircle } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { MdFastfood, MdPeople } from "react-icons/md";
import { BsBorderWidth } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";

export default function Listmenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ?
            "text-hijau bg-green-200 font-extrabold" :
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (

        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <NavLink
                        id="menu-1"
                        to="/"
                        className={menuClass}>
                        <MdDashboard className="mr-4 text-xl" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        id="menu-2"
                        to="/orders"
                        className={menuClass}>
                        <AiOutlineUnorderedList className="mr-4 text-xl" />
                        <span>Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        id="menu-3"
                        to="/customers"
                        className={menuClass}>
                        <IoIosPeople className="mr-4 text-xl" />
                        <span>Customer</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        id="menu-4"
                        to="/products"
                        className={menuClass}
                    >
                        <MdFastfood className="mr-4 text-xl" />
                        Products
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        id="menu-4"
                        to="/notes"
                        className={menuClass}
                    >
                        <MdFastfood className="mr-4 text-xl" />
                        Notes
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        id="menu-error-400"
                        to="/400"
                        className={menuClass}
                    >
                        <BiErrorCircle className="mr-4 text-xl" />
                        <span>Error 400</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        id="menu-error-401"
                        to="/401"
                        className={menuClass}
                    >
                        <BiErrorCircle className="mr-4 text-xl" />
                        <span>Error 401</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        id="menu-error-403"
                        to="/403"
                        className={menuClass}
                    >
                        <BiErrorCircle className="mr-4 text-xl" />
                        <span>Error 404</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}