import React, { useEffect, useState } from "react";
import loginService from "../services/auth/login";
import useAuthStore from "../store/authStore";
import { redirect, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";
import useCurrentUser from "@/store/currentUserStore";

const SignIn = () => {
  const { login } = useAuthStore();
  const { setCurrentUser } = useCurrentUser();
  const [formData, setFormData] = useState({
    userID: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginService(formData.userID, formData.password);
    if (res.status) {
      await setCurrentUser(res.data);
      await login();
    }
  };

  return (
    <div className="xs:relative w-full h-screen flex items-center justify-center bg-slate-950 z-1">
      <div className="absolute inset-0 bg-[url('/images/map.png')] bg-opacity-100  z-3 bg-center bg-no-repeat bg-contain mix-blend-screen opacity-[0.08] saturate-0 invert"></div>
      <div
        className="z-10 w-full max-w-sm h-fit bg-opacity-35 backdrop-blur-sm xs:h-auto flex items-center justify-center py-6 px-6 xs:rounded-lg shadow xs:p-6 md:p-8 bg-gray-800 border-gray-700 bg drop-shadow-md
      "
      >
        <form className="pb-2 w-full" onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <h5 className="text-2xl font-medium text-white text-center uppercase">
              Log In
            </h5>
            <Input
              onInputChange={handleChange}
              type="text"
              name="userID"
              htmlFor="text"
              labelText="Your ID"
              id="text"
              className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
              placeholder="Your Unique ID"
              autoComplete="off"
            />

            <PasswordInput
              onInputChange={handleChange}
              value={formData.password}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
          >
            Login
          </button>
          <p className="w-full text-center mt-5 text-xl text-blue-600 font-bold">
            &copy;IBSU <br />
            <span className="text-sm text-blue-300/40 font-normal">
              Student Information System
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
