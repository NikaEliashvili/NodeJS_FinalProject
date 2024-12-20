import apiClient from "@/api/apiClient";
export const getUser = async (userID) => {
  try {
    const res = await apiClient.post("/admin/getUser", {
      userID,
    });

    return res.data.data.user;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};
