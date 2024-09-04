import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import logoutService from "@/services/auth/logout";
import UserGraduate from "@/assets/SVG/UserGraduate";
import LogoutSVG from "@/assets/SVG/LogoutSVG";

const UserDropDownMenu = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const signout = () => {
    logout();
    logoutService();
    navigate("/");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={ref} className="relative ml-3">
      <div>
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700 focus:ring-offset-1 focus:ring-offset-gray-800"
          onClick={toggleMenu}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="/icons/user.png"
            alt=""
            onError={(e) => (e.target.src = "/icons/logo.png")}
          />
        </button>
      </div>
      <div
        className={
          "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
          (isMenuOpen ? "visible" : "hidden")
        }
      >
        <Link
          to="/profile"
          className="flex justify-between items-center px-4 py-2 text-sm text-gray-100 bg-inherit hover:brightness-110"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-0"
        >
          Your Profile <UserGraduate className="text-lg opacity-90" />
        </Link>
        <button
          onClick={signout}
          className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-100 bg-inherit hover:brightness-110"
        >
          Sign out
          <LogoutSVG className="text-lg opacity-90" />
        </button>
      </div>
    </div>
  );
};

export default UserDropDownMenu;
