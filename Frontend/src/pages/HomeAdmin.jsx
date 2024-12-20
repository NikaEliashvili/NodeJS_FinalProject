import React, { useEffect, useState } from "react";
import CustomTable from "@/components/CustomTable/CustomTable";
import Card from "@/components/InformationCard/Card";
import { getAllUsers } from "@/services/admin/getAllUsers";
import { columns } from "../data/adminTableColuimns";
import useCurrentSelectedUser from "@/store/selectedUser";
const HomeAdmin = () => {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const { setCurrentSelectedUser } = useCurrentSelectedUser();
  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setData(users);
      setCurrentSelectedUser(users[0]);
    };
    fetchData();
  }, []);
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex items-center justify-center min-h-full max-w-full px-10">
      <div className="flex gap-10 max-w-7xl w-full">
        <Card />
        <div className="flex max-w-7xl w-full">
          <CustomTable
            columns={columns}
            data={data}
            handleSearch={handleSearch}
            searchBy="userID"
            searchable={true}
            className="max-w-7xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
