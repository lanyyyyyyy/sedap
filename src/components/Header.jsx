import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-3
    ${isActive
      ? "text-white bg-gray-950 font-extrabold"
      : "text-white hover:text-white hover:bg-gray-950 hover:font-extrabold"
    }`;
  return (
  <div
    id="sidebar"
    className="flex w-full items-center bg-gray-900 p-3 shadow-lg"
  >
    {/* Logo */}
    <div id="sidebar-logo" className="flex flex-col ml-4 mr-8">
      <span
        id="logo-title"
        className="font-poppins-extrabold text-[48px] text-white"
      >
        Sedap{" "}
        <b id="logo-dot" className="text-merah">
          .
        </b>
      </span>
      <span id="logo-subtitle" className="font-semibold text-gray-400">
        Restoran Khas Indonesia
      </span>
    </div>

    {/* Menu kiri: Home & About */}
    <div className="flex items-center">
      <NavLink id="menu-1" to="/" className={menuClass}>
        <MdDashboard className="mr-4 text-xl" />
        Home
      </NavLink>
      <NavLink id="menu-2" to="/about" className={menuClass}>
        <AiOutlineUser className="mr-4 text-xl" />
        About
      </NavLink>
    </div>

    {/* Menu kanan: Login & Register */}
    <div className="flex items-center space-x-2 ml-auto">
      <NavLink id="menu-3" to="/login" className={menuClass}>
        Login
      </NavLink>
      <NavLink id="menu-4" to="/register" className={menuClass}>
        Register
      </NavLink>
    </div>
  </div>
);
}
