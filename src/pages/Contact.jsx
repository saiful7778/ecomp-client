import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../layout/shared/LoadingSpinner";

const Contact = () => {
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    (async () => {
      const data = await axiosSecure("/products");
      console.log(data.data);
    })();
  }, [axiosSecure]);
  return <LoadingSpinner />;
};

export default Contact;
