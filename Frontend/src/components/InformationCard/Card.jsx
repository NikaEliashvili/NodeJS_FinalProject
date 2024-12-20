import React from "react";
import userImg from "../../../public/icons/user.png";
import useCurrentSelectedUser from "@/store/selectedUser";

const Card = () => {
  const { currentSelectedUser } = useCurrentSelectedUser();
  const informationFields = [
    { name: "Name", key: "firstName" },
    { name: "Last Name", key: "lastName" },
    { name: "User ID", key: "userID" },
    { name: "Personal ID", key: "personalID" },
    { name: "E-Mail", key: "email" },
    { name: "Date Of Birth", key: "DOB" },
    { name: "Place Of Birth", key: "POB" },
    { name: "Enrolled Year", key: "enrolledYear" },
    { name: "Faculty Program", key: "facultyProgram" },
    { name: "Sector", key: "sector" },
    { name: "Position", key: "positionID" },
    { name: "Phone Number", key: "mobileNum" },
  ];
  return (
    <div className="min-w-[430px] min-h-full bg-[#172133] rounded-2xl py-4 px-10">
      <div className="min-h-full flex flex-col">
        <div className="flex justify-between h-fit text-xl">
          <h3>Information card</h3>
          <button>...</button>
        </div>
        <div className="flex flex-col py-5 flex-grow">
          <div className="flex gap-5 pb-5">
            <img src={userImg} alt="User" />
            <h3 className="text-2xl">
              {currentSelectedUser?.firstName} {currentSelectedUser?.lastName}
            </h3>
          </div>
          <table className="flex flex-col text-nowrap flex-grow">
            <tbody className="flex flex-col flex-wrap flex-grow justify-around  pr-8">
              {informationFields.map((info) => (
                <tr key={info.key} className="flex justify-between">
                  <td className="flex">{info.name}:</td>
                  <td className="flex w-40 text-left">
                    {currentSelectedUser[info.key]
                      ? info.name === "Position"
                        ? currentSelectedUser[info.key] === 1
                          ? "Student"
                          : "Lecturer"
                        : currentSelectedUser[info.key]
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
