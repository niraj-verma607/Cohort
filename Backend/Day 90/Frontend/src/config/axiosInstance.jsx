import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// axiosInstance.interceptors.request.use();

// axiosInstance.interceptors.response.use();
