import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1100/api",
  // baseURL: "https://godly-teens-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default api;
