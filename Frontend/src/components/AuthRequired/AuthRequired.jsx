import React, { useEffect } from "react";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { getPostion } from "../../utils/getCurrentUserPosition";
export default function AuthRequired() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuthStore();

  useEffect(() => {
    
    if (!isLoggedIn) {
      navigate("/");
    } else {
      const { positionID } = getPostion();
      console.log(positionID);
    }
  }, [isLoggedIn]);
  return <Outlet />;
}
