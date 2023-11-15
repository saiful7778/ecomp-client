import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://fakestoreapi.com",
  //   withCredentials: true,
});

export default axiosSecure;
