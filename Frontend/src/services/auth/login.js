import apiClient from "../../api/apiClient";

export default async function loginService(userID, password) {
  try {
    const response = await apiClient.post("/signin/", {
      userID,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);
    return error.response.data;
  }
}
