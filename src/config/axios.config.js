import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://fakestoreapi.com",
  baseURL: "http://localhost:5001",
  withCredentials: true,
});

export default axiosSecure;
