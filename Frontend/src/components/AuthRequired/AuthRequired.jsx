import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { getPostion } from "../../utils/getCurrentUserPosition";
import { authStatus } from "../../services/auth/checkAuth";
import useCurrentUser from "@/store/currentUserStore";
export default function AuthRequired() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuthStore();
  const { setCurrentUser } = useCurrentUser();
  useEffect(() => {
    authStatus()
      .then((res) => {
        if (res && res.data && res.data.status !== undefined) {
          if (res.data.status) {
            setCurrentUser(res.data.user);
            login();
          } else {
            console.log("else is here");
            logout();
          }
        } else {
          logout();
        }
      })
      .catch((err) => {
        logout();
      });
  }, []);
  useEffect(() => {
    const fetchPosition = async () => {
      const { positionID } = await getPostion();

      if (positionID === 3) {
        navigate("/admin");
      } else if (positionID === 2) {
        navigate("/lecturer");
      } else {
        navigate("/student");
      }
    };

    if (!isLoggedIn) {
      navigate("/");
    } else {
      fetchPosition();
    }
  }, [isLoggedIn]);
  return <Outlet />;
}
