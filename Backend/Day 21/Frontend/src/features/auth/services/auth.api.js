import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function register(username, email, password) {
  try {
    const response = await api.post(
      "/api/auth/register",
      {
        username,
        email,
        password,
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function login(username, password) {
  try {
    const response = await api.post(
      "/api/auth/login",
      {
        username,
        password,
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me");

    return response.data;
  } catch (error) {
    throw error;
  }
}
