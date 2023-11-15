import { useEffect } from "react";
import axiosSecure from "../config/axios.config";

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (data) => {
        return data;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("unauthorized");
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
