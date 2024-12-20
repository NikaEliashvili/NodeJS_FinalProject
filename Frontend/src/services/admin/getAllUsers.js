import apiClient from "../../api/apiClient";

export const getAllUsers = async () => {
  try {
    const allUsers = [];
    const response = await apiClient.get("/admin/getEveryone");
    allUsers.push(response.data.students);
    allUsers.push(response.data.lecturers);

    return allUsers.flat();
  } catch (err) {
    console.error("Error getting all users:", err);
    return err.response.data;
  }
};
