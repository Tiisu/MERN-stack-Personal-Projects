import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.baseURL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies with requests
});

export default api;