import apiClient from "../../api/apiClient";

export default async function logoutService() {
  try {
    await apiClient.get("/logout/");
  } catch (error) {
    console.error("Error signing in:", error);
  }
}
