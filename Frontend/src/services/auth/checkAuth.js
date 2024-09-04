import apiClient from "../../api/apiClient";

export async function authStatus() {
  try {
    const response = await apiClient.get("/auth/status");
    return response;
  } catch (error) {
    return error.response.data;
  }
}
