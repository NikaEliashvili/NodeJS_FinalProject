import React from "react";
import sidebarStore from "../../store/sidebarStore";
import { Link } from "react-router-dom";
import UserDropDownMenu from "../UserDropDownMenu/UserDropDownMenu";

const Header = () => {
  const toggleSidebar = sidebarStore((state) => state.toggleSidebar);

  return (
    <nav className="border-gray-200 bg-gray-900 ">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => toggleSidebar()}
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden  focus:outline-none  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white relative">
              IBSU
              <div className="absolute bottom-0 left-full ml-1 text-[10px]/[10px] font-normal w-2 h-4 opacity-45">
                SIS
              </div>
            </span>
          </Link>
        </div>
        <UserDropDownMenu />
      </div>
    </nav>
  );
};

export default Header;
